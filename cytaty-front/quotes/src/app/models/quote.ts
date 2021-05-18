export interface Quote {
  id: string;
  quote: string;
  year: string;
  author: {
    [name: string]: string
  };

  topic?: {
    [name: string]: string
  };
}
