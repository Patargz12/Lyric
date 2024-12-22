export default defineEventHandler(async (event) => {
    const slug = event.context.params?.slug;
    const articles = await $fetch('/api/events');

    const article = articles.find(a => a.slug === slug);

    if (!article) {
        throw createError({
            statusCode: 404,
            message: 'Article not found'
        });
    }

    // Get exactly 2 related articles based on category
    const relatedArticles = articles
        .filter(a => a.category === article.category && a.id !== article.id)
        .slice(0, 2);

    return {
        article,
        relatedArticles
    };
});
