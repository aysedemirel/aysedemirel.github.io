export interface Article {
  name: string;
  topic: string;
  year: number;
  date: string;
  description: string;
  contentFile: string;
  mediumLink?: string;
  substackLink?: string;
}

export interface ArticlesByYear {
  year: number;
  articles: Article[];
}

export interface TopicData {
  name: string;
  value: number;
}
