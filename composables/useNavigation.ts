import { ref, computed } from 'vue'
import type { MenuItem, NavigationSection, MegaMenuContent } from '../types/navigation'

export function useNavigation() {
    const activeDropdown = ref<string | null>(null)
    const isMouseOverDropdown = ref(false)

    const navigationData: Record<string, MegaMenuContent> = {
        'WHAT\'S NEW': {
            categories: [
                {
                    id: 'new-arrival',
                    title: '',
                    items: [
                        { id: 'new-arrival', title: 'New Arrival', href: '/new-arrival' }
                    ]
                },
                {
                    id: 'news-events',
                    title: '',
                    items: [
                        { id: 'news-events', title: 'News and Events', href: '/news-events' }
                    ]
                },
                {
                    id: 'newsletter',
                    title: '',
                    items: [
                        {
                            id: 'subscribe',
                            title: 'Subscribe to our newsletter',
                            href: '#',
                            isNewsletter: true
                        }
                    ]
                }
            ]
        },
        'SHOP BY CATEGORY': {
            categories: [
                {
                    id: 'main-categories',
                    title: '',
                    items: [
                        { id: 'musical-instruments', title: 'Musical Instruments', href: '/category/musical-instruments' },
                        { id: 'pro-audio', title: 'Pro-Audio and Visuals', href: '/category/pro-audio' },
                        { id: 'spare-parts', title: 'Spare Parts', href: '/category/spare-parts' },
                        { id: 'books', title: 'Books', href: '/category/books' }
                    ]
                },
                // ... rest of the categories remain the same
            ]
        }
        // ... other navigation items remain the same
    }

    const showDropdown = (id: string) => {
        activeDropdown.value = id
    }

    const hideDropdown = () => {
        if (!isMouseOverDropdown.value) {
            activeDropdown.value = null
        }
    }

    const setMouseOver = (status: boolean) => {
        isMouseOverDropdown.value = status
    }

    return {
        activeDropdown,
        navigationData,
        showDropdown,
        hideDropdown,
        setMouseOver
    }
}