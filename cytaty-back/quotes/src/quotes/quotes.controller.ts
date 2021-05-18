
import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post, Res, UploadedFiles, UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {QuotesService} from "./quotes.service";
import {QuotesInterface} from "../interfaces/quotes";
import {topics} from "../interfaces/topics";
import {AddQuoteDto} from "./dto/add-quote.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {MulterDiskUploadedFiles} from "../interfaces/files";
import {multerStorage} from "../utils/storage";
import {AuthGuard} from "@nestjs/passport";

@Controller('quotes')
export class QuotesController {

    constructor(
        @Inject(QuotesService) private quotesService: QuotesService,
    ) {
    }

    @Get('/:pageNumber')
    async getListOfQuotes(
        @Param('pageNumber') pageNumber: string
    ): Promise<QuotesInterface[]> {
        return await this.quotesService.getQuotes(Number(pageNumber));
    }

    @Post('/')
    @UseInterceptors(
        FileFieldsInterceptor([
            {
                name: 'photo', maxCount: 3
            },

        ], {storage: multerStorage()},
        ),
    )
    addQuote(
        @Body() req: AddQuoteDto,
        @UploadedFiles() files: MulterDiskUploadedFiles,

    ): Promise<QuotesInterface> {
        return this.quotesService.addQuote(req, files);
    }


    @Get('/photo/:id')
    async getPhoto(
        @Param('id') id: string,
        @Res() res: any,
    ): Promise<any> {
        return this.quotesService.getPhoto(id, res)
    }



    @Get('/find/:searchTerm')
    async findQuote(
        @Param('searchTerm') searchTerm: string
    ): Promise<QuotesInterface[]> {
        return this.quotesService.findQuotes(searchTerm);
    }

    @Get('/advancedFind/:authorTerm/:topicTerm/:yearTerm')
    async findAdvancedQuote(
       @Param('authorTerm') authorTerm: string ,
       @Param('topicTerm') topicTerm: string,
       @Param('yearTerm') yearTerm: string,
    ): Promise<QuotesInterface[]> {
        return this.quotesService.findAdvancedQuote(authorTerm, topicTerm, yearTerm);
    }




    /// search topic

    @Get('/topic/:topicTerm')
    async getQuotesFromTopic(
        @Param('topicTerm') topicTerm: string,
    ): Promise<QuotesInterface[]> {
        return this.quotesService.getQuotesFromTopic(topicTerm);
    }

    /// search author

    @Get('/author/:authorTerm')
    async getQuotesFromAuthor(
        @Param('authorTerm') authorTerm: string,
    ): Promise<QuotesInterface[]> {
        return this.quotesService.getQuotesFromAuthor(authorTerm);
    }





    /// get all topic and after the letter

    @Get('/topics/all')
    async getListOfAllTopics(): Promise<topics[]> {
        return this.quotesService.getListOfAllTopics();
    }



    @Get('/topics/:letter')
    async getListOfTopic(
        @Param('letter') letter: string,
    ): Promise<topics[]> {
        return this.quotesService.getListOfTopic(letter);
    }

    /// get all author and after the letter


    @Get('/authors/all')
    async getListOfAllAuthors(): Promise<topics[]> {
        return this.quotesService.getListOfAllAuthors();
    }

    @Get('/authors/:letter')
    async getListOfAuthor(
        @Param('letter') letter: string,
    ): Promise<topics[]> {
        return this.quotesService.getListOfAuthor(letter);
    }





    ////// PIPE PIPE PIPE

    // @Get('/test/:index')
    // test(
    //     @Param('index', ParseIntPipe) index: number,
    // ) {
    //     console.log(typeof index)
    //     return '';
    // }

    /// deafult wartosc domyslna, bład i validacja
    // @Get('/test/:index?')
    // test(
    //     @Param('index', new DefaultValuePipe(0),  new ParseIntPipe({
    //         errorHttpStatusCode: HttpStatus.FORBIDDEN,
    //     })) index?: number,
    // ) {
    //     console.log(typeof index)
    //     return '';
    // }


    // @Get('/test/:age')
    // test(
    //     @Param('age', new CheckTestPipe({
    //         minAge: 21,
    //     })) age: number,
    // ) {
    //     console.log(typeof age, age)
    //     return '';
    // }


    ////// PIPE PIPE PIPE





}
