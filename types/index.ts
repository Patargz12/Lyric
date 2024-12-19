export interface Lesson {
    id: number
    title: string
    image: string
}

export interface RecitalEvent {
    id: number
    title: string
    daysLeft: number
    location: string
    time: string
    date: string
    additionalInfo?: string
}

export interface Location {
    id: number
    name: string
    address: string
    phone: string
    website: string
    image: string
}

export interface ServiceBenefit {
    title: string;
    description: string;
}

export interface Service {
    id: number;
    title: string;
    modal_description: string;
    description: string;
    image: string;
    benefits: ServiceBenefit[];
}

export interface Article {
    id: number
    title: string
    description: string
    image: string
    date: string
    category: 'News' | 'Blog' | 'Event' | 'Press'
    slug: string
}

export interface PaginationState {
    currentPage: number
    totalPages: number
    itemsPerPage: number
}

export type Tab = 'News' | 'Blog' | 'Event' | 'Press'

export interface Location {
    id: number,
    name: string
    image: string
    address: string
    phone: string
    website: string
    region: 'metro' | 'provincial'
}

export interface MenuItem {
    id: string
    title: string
    href?: string
    children?: MenuItem[]
}

export interface NavigationSection {
    id: string
    title: string
    items: MenuItem[]
}

export interface MegaMenuContent {
    categories: NavigationSection[]
    featuredImage?: {
        src: string
        alt: string
        title: string
        description: string
        link: string
    }
}


// export interface Service {
//     id: number
//     title: string
//     description: string
//     image: string
// }

// export interface Service {
//     id: number
//     title: string
//     description: string
//     image: string
// }