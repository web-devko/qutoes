import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {QuotesInterface} from "../interfaces/quotes";
import {QuotesTopicEntity} from "./quotes-topic.entity";
import {QuotesAuthorEntity} from "./qutoes-author.entity";


@Entity()
export class QuotesEntity extends BaseEntity implements QuotesInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        length: 100,
    })
    quote: string;

    @Column()
    year: string;


    @Column({
        default: null,
        nullable: true,
    })
    photoFn: string;


    @ManyToOne(type => QuotesTopicEntity, entity => entity.quotesEntity)
    @JoinColumn()
    topic: QuotesTopicEntity;

    @ManyToOne(type => QuotesAuthorEntity, entity => entity.quotesEntity)
    @JoinColumn()
    author: QuotesAuthorEntity;
}