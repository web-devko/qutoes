import {IsString} from "class-validator";
import {QuotesTopicEntity} from "../quotes-topic.entity";
import {QuotesAuthorEntity} from "../qutoes-author.entity";

export class AddQuoteDto {
    @IsString()
    quote: string;

    @IsString()
    year: string;

    @IsString()
    // @Length(10, 200)
    topic: string;

    @IsString()
    // @Max(1500)
    author: string;
}