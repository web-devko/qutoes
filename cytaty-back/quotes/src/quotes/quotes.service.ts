import {Injectable} from '@nestjs/common';
import {QuotesEntity} from "./quotes.entity";
import {QuotesInterface} from "../interfaces/quotes";
import {getConnection} from "typeorm";
import {QuotesTopicEntity} from "./quotes-topic.entity";
import {QuotesAuthorEntity} from "./qutoes-author.entity";
import {topics} from "../interfaces/topics";
import {AddQuoteDto} from "./dto/add-quote.dto";
import {MulterDiskUploadedFiles} from "../interfaces/files";
import * as fs from 'fs';
import * as path from 'path';
import {storageDir} from "../utils/storage";


@Injectable()
export class QuotesService {

    filter(quotesEntity: QuotesEntity): QuotesInterface {
        const {id, quote, year} = quotesEntity;
        return {id, quote, year,};
    }



    async getQuotes(currentPage: number = 1): Promise<QuotesInterface[]> {
        const maxPerPage = 5;

        const [quotes, count] = await QuotesEntity.findAndCount({
            relations: ['topic', 'author'],
            skip: maxPerPage * (currentPage - 1),
            take: maxPerPage,
        });

        const pagesCount = Math.ceil(count / maxPerPage);
        console.log({count, pagesCount})

        return quotes
    }

    /// easy word search

    async findQuotes(searchTerm: string): Promise<QuotesInterface[]> {
        return await getConnection()
            .createQueryBuilder()
            .select('quotesEntity')
            .from(QuotesEntity, 'quotesEntity')
            .leftJoinAndSelect('quotesEntity.topic', 'topic')
            .leftJoinAndSelect('quotesEntity.author', 'author')
            .where('quote LIKE :searchTerm',
                {
                    searchTerm: `%${searchTerm}%`
                })
            .getMany()
    }

    /// advanced search quote

    async findAdvancedQuote(authorTerm: string, topicTerm: string, yearTerm: string): Promise<QuotesInterface[]> {
        return await getConnection()
            .createQueryBuilder()
            .select('quotesEntity')
            .from(QuotesEntity, 'quotesEntity')
            .leftJoinAndSelect('quotesEntity.topic', 'topic')
            .leftJoinAndSelect('quotesEntity.author', 'author')
            .where('author.name LIKE :authorTerm',
                {
                    authorTerm: `%${authorTerm}%`,
                })
            .andWhere('topic.name LIKE :topicTerm',
                {
                    topicTerm: `%${topicTerm}%`,
                })
            .andWhere('quotesEntity.year LIKE :yearTerm',
                {
                    yearTerm: `%${yearTerm}%`
            })
            .getMany()
    }

    /// search by topic

    async getQuotesFromTopic(topicTerm: string): Promise<QuotesInterface[]> {
        return await getConnection()
            .createQueryBuilder()
            .select('quotesEntity')
            .from(QuotesEntity, 'quotesEntity')
            .leftJoinAndSelect('quotesEntity.topic', 'topic')
            .leftJoinAndSelect('quotesEntity.author', 'author')
            .where('topic.name LIKE :topicTerm',
            {
                topicTerm: `%${topicTerm}%`,
            })
            .getMany()
    }

    /// search by author

    async getQuotesFromAuthor(authorTerm: string): Promise<QuotesInterface[]> {
        return await getConnection()
            .createQueryBuilder()
            .select('quotesEntity')
            .from(QuotesEntity, 'quotesEntity')
            .leftJoinAndSelect('quotesEntity.author', 'author')
            .leftJoinAndSelect('quotesEntity.topic', 'topic')
            .where('author.name LIKE :authorTerm',
                {
                    authorTerm: `%${authorTerm}%`,
                })
            .getMany()
    }

    async getListOfTopic(id: string): Promise<topics[]> {
        return await getConnection()
            .createQueryBuilder()
            .select('quotesTopicEntity')
            .from(QuotesTopicEntity, 'quotesTopicEntity')
            .where('name LIKE :id',
                {
                    id: `${id}%`,
                })
            .getRawMany()
    }

    async getListOfAuthor(id: string): Promise<topics[]> {
        return await getConnection()
            .createQueryBuilder()
            .select('quotesAuthorEntity')
            .from(QuotesAuthorEntity, 'quotesAuthorEntity')
            .where('name LIKE :id',
                {
                    id: `${id}%`,
                })
            .getRawMany()
    }

    /// add quote with photo

    async addQuote(req: AddQuoteDto, files: MulterDiskUploadedFiles): Promise<QuotesInterface> {
        const photo = files?.photo?.[0] ?? null;

        try {
            const quotes = new QuotesEntity();
            const topic = new QuotesTopicEntity();
            const author = new QuotesAuthorEntity();


            topic.id = req.topic;
            author.id = req.author;


            quotes.quote = req.quote;
            quotes.year = req.year;
            quotes.topic = topic
            quotes.author = author;


            if (photo) {
                quotes.photoFn = photo.filename;
            }

            await quotes.save();

            return this.filter(quotes);
        } catch(e) {
            try {
                if (photo) {
                    fs.unlinkSync(
                        path.join(storageDir(), 'product-photos', photo.filename)
                    );
                }
            }catch(e2) {}

            throw e;
        }
    }



    async getPhoto(id: string, res: any) {
        try {
            const one = await QuotesEntity.findOne(id);

            if (!one) {
                throw new Error('No object found!');
            }

            if (!one.photoFn) {
                throw new Error('No photo in this entity')
            }

            res.sendFile(
                one.photoFn,
                {
                    root: path.join(storageDir(), 'product-photos'),
                },
            );
        } catch (e) {
            res.json({
                error: e.message,
            });
        }
    }

    /// !! important interface TOPICS === AUTHORS

    async getListOfAllAuthors(): Promise<topics[]> {
        return await getConnection()
            .createQueryBuilder()
            .select('quotesAuthorEntity')
            .from(QuotesAuthorEntity, 'quotesAuthorEntity')
            .getRawMany()
    }

    async getListOfAllTopics(): Promise<topics[]> {
        return await getConnection()
            .createQueryBuilder()
            .select('quotesTopicEntity')
            .from(QuotesTopicEntity, 'quotesTopicEntity')
            .getRawMany()
    }
}
