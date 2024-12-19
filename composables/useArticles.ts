import { ref, computed } from 'vue'
import type { Article, PaginationState, Tab } from '~/types/'

export function useArticles() {
    const activeTab = ref<Tab>('News')
    const articles = ref<Article[]>([
        {
            id: 1,
            title: 'The Yin and Yang of Senri Kawaguchi',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at. Ac augue non gravida.',
            image: '/news_pic1.png',
            date: 'March 1, 2024',
            category: 'News',
            slug: 'yin-and-yang'
        },
        {
            id: 2,
            title: 'The Yin and Yang of Senri Kawaguchi',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at. Ac augue non gravida.',
            image: '/news_pic2.png',
            date: 'March 1, 2024',
            category: 'News',
            slug: 'yin-and-yang'
        },
        {
            id: 3,
            title: 'The Yin and Yang of Senri Kawaguchi',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at. Ac augue non gravida.',
            image: '/news_pic3.png',
            date: 'March 1, 2024',
            category: 'News',
            slug: 'yin-and-yang'
        },
        {
            id: 4,
            title: 'The Yin and Yang of Senri Kawaguchi',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at. Ac augue non gravida.',
            image: '/news_pic4.png',
            date: 'March 1, 2024',
            category: 'Blog',
            slug: 'yin-and-yang'
        },
        {
            id: 5,
            title: 'The Yin and Yang of Senri Kawaguchi',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at. Ac augue non gravida.',
            image: '/news_pic5.png',
            date: 'March 1, 2024',
            category: 'Event',
            slug: 'yin-and-yang'
        },
        {
            id: 6,
            title: 'The Yin and Yang of Senri Kawaguchi',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at. Ac augue non gravida.',
            image: '/news_pic6.png',
            date: 'March 1, 2024',
            category: 'News',
            slug: 'yin-and-yang'
        },
        {
            id: 7,
            title: 'The Yin and Yang of Senri Kawaguchi',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at. Ac augue non gravida.',
            image: '/news_pic4.png',
            date: 'March 1, 2024',
            category: 'News',
            slug: 'yin-and-yang'
        },
        {
            id: 8,
            title: 'The Yin and Yang of Senri Kawaguchi',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at. Ac augue non gravida.',
            image: '/news_pic5.png',
            date: 'March 1, 2024',
            category: 'News',
            slug: 'yin-and-yang'
        },


    ])

    const pagination = ref<PaginationState>({
        currentPage: 1,
        totalPages: 25,
        itemsPerPage: 6
    })

    const filteredArticles = computed(() => {
        return articles.value.filter(article => article.category === activeTab.value)
    })

    const paginatedArticles = computed(() => {
        const start = (pagination.value.currentPage - 1) * pagination.value.itemsPerPage
        const end = start + pagination.value.itemsPerPage
        return filteredArticles.value.slice(start, end)
    })

    const setPage = (page: number) => {
        pagination.value.currentPage = page
    }

    const setActiveTab = (tab: Tab) => {
        activeTab.value = tab
        pagination.value.currentPage = 1
    }

    return {
        articles: paginatedArticles,
        pagination,
        activeTab,
        setPage,
        setActiveTab
    }
}