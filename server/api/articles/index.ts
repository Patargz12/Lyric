import { defineEventHandler, createError, getQuery } from 'h3'
import { Article, articles } from '../data/articles'

export default defineEventHandler((event) => {
    try {
        const query = getQuery(event)
        const slug = query.slug?.toString()
        const category = query.category?.toString()
        const page = Number(query.page) || 1
        const perPage = Number(query.limit) || 6
        const excludeId = Number(query.exclude) || 0

        // If slug is provided, return single article
        if (slug) {
            const article = articles.find(a => a.slug === slug)
            if (!article) {
                throw createError({
                    statusCode: 404,
                    statusMessage: 'Not Found',
                    message: `Article with slug "${slug}" not found`
                })
            }
            return article
        }

        // Otherwise, filter articles by category and other criteria
        let filteredArticles = [...articles]

        if (category && category !== 'all') {
            filteredArticles = filteredArticles.filter(article =>
                article.category?.toLowerCase() === category.toLowerCase()
            )
        }

        if (excludeId) {
            filteredArticles = filteredArticles.filter(article => article.id !== excludeId)
        }

        // Calculate pagination
        const total = filteredArticles.length
        const totalPages = Math.ceil(total / perPage)
        const start = (page - 1) * perPage
        const end = start + perPage

        return {
            articles: filteredArticles.slice(start, end),
            pagination: {
                current: page,
                total: totalPages,
                perPage,
                totalItems: total
            }
        }
    } catch (error: any) {
        console.error('Error in articles endpoint:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Internal Server Error',
            message: error.message || 'An error occurred while fetching articles'
        })
    }
})