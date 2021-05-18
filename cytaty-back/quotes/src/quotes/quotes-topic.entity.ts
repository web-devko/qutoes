import {BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {topics} from "../interfaces/topics";
import {QuotesEntity} from "./quotes.entity";

@Entity()
export class QuotesTopicEntity extends BaseEntity implements topics {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        length: 40,
    })
    name: string;


    @OneToMany(type => QuotesEntity, entity => entity.topic)
    quotesEntity: QuotesEntity;
}
