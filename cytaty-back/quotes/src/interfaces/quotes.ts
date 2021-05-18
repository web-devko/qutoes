export interface QuotesInterface {
    id: string;
    quote: string;
    year: string;
}

export interface GetPaginatedListOfQuotesResponse {
    quotes: QuotesInterface[];
    pagesCount: number;
}
