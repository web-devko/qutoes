import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {QuotesEntity} from "./quotes.entity";
import {QuotesTopicEntity} from "./quotes-topic.entity";

@Entity()
export class QuotesAuthorEntity  extends BaseEntity implements QuotesTopicEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(type => QuotesEntity, entity => entity.author)
    quotesEntity: QuotesEntity;
}