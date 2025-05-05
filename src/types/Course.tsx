export interface DetailedChapter {
    title: string;
    content: string;
  }
  export interface FAQ {
    question: string;
    answer: string;
  }
  export interface Course {
    id: number;
    title: string;
    description: string;
    level: string;
    chapters: string;
    price: string;
    ratings: string;
    image: string;
    whatYouLearn: string[];
    detailedChapters: DetailedChapter[];
    skills: string[];
    faqs: FAQ[];
  }
  