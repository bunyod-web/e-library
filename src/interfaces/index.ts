export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export interface AboutUs {
    id: number;
    title: string;
    about: string;
}
export interface News {
    id: number;
    title: string;
    image: string;
    content: string;
    news_video: string;
    created_at: string;
}
export interface Login {
    email: string;
    password: string;
}