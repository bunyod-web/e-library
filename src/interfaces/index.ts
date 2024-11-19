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

export interface Administration {
    id: number;
    full_name: string;
    position: string;
    bio: string;
    phone_number: string;
    profile_image: string;
    admission_day: string;
}