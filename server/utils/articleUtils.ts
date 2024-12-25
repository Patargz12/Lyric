import type { Article } from '~/types/article'
import type { H3Event } from 'h3'

export async function getArticlesByCategory(category: string): Promise<Article[]> {
    try {
        const mod = await import(`../api/${category.toLowerCase()}`)
        // Create a mock event object since we're calling the handler directly
        const mockEvent = {} as H3Event
        return mod.default(mockEvent)
    } catch (error) {
        console.error(`Error loading articles for category: ${category}`, error)
        return []
    }
}

export function findArticleBySlug(articles: Article[], slug: string): Article | undefined {
    return articles.find(article => article.slug === slug)
}
