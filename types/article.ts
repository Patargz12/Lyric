export interface Article {
    id: number
    title: string
    description: string
    image: string
    content: Array<{
        type: string
        content?: string
        url?: string
        caption?: string
    }>
    date: string
    category: string
    slug: string
}