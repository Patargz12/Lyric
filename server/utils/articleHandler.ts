import { H3Event, createError } from 'h3';

export const handleArticleRequest = async (event: H3Event, type: string) => {
    const slug = event.context.params?.slug;
    const articles = await $fetch(`/api/${type}s`);

    const article = articles.find(a => a.slug === slug);

    if (!article) {
        throw createError({
            statusCode: 404,
            message: 'Article not found'
        });
    }

    const relatedArticles = articles
        .filter(a => a.category === article.category && a.id !== article.id)
        .slice(0, 2);

    return {
        article,
        relatedArticles
    };
};