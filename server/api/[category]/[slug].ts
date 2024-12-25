import { defineEventHandler, createError } from 'h3'
import type { Article } from '~/types/article'

export default defineEventHandler(async (event) => {
    const { category, slug } = event.context.params

    // Validate parameters
    if (!category || !slug) {
        throw createError({
            statusCode: 400,
            message: 'Missing required parameters'
        })
    }

    try {
        // Dynamically import the category module
        const mod = await import(`../${category.toLowerCase()}`)
        const articles: Article[] = await mod.default(event)

        const article = articles.find(a => a.slug === slug)
        if (!article) {
            throw createError({
                statusCode: 404,
                message: `Article "${slug}" not found`
            })
        }

        return article
    } catch (error) {
        console.error('Error fetching article:', error)
        throw createError({
            statusCode: 404,
            message: `Category "${category}" not found`
        })
    }
})
