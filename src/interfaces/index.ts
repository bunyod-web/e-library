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
export interface Event {
    id: number;
    title: string;
    duration: string;
    image: string;
    event_reason: string;
    address: string;
    speaker: string;
}
export interface Books {
    id: number;
    title: string;
    author: string;
    thumbnail: string;
    institution_name: string;
    keywords: string;
    publication_city: string;
    publication_year: string;
    description: string;
    content_type: string;
    degree: string;
    issn_isbn: string;
    file: string;
    created_at: string;
    updates_at: string;
    average_rating: number;
    user: number;
    category: number;
}