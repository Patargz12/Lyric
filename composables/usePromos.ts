import { ref, onMounted, onUnmounted } from 'vue'

export interface PromoItem {
    id: number
    image: string
    title: string
    link: string
}

export function usePromos() {
    const promos = ref<PromoItem[]>([
        {
            id: 1,
            image: '/promo_pic1.png',
            title: 'TikTok Live Selling',
            link: '/promos/tiktok'
        },
        {
            id: 2,
            image: '/promo_pic2.png',
            title: 'Music Accessories',
            link: '/promos/accessories'
        },
        {
            id: 3,
            image: '/promo_pic3.png',
            title: 'Marshall Amplifiers',
            link: '/promos/marshall'
        },
        {
            id: 4,
            image: '/promo_pic4.jpg',
            title: 'Kawai ES120',
            link: '/promos/kawai'
        },
        {
            id: 5,
            image: '/promo_pic5.jpg',
            title: 'Electric Guitars',
            link: '/promos/guitars'
        }
    ])

    const currentIndex = ref(0)
    let autoplayInterval: number | null = null

    const startAutoplay = () => {
        autoplayInterval = window.setInterval(() => {
            currentIndex.value = (currentIndex.value + 1) % promos.value.length
        }, 5000) // Change slide every 5 seconds
    }

    const stopAutoplay = () => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval)
        }
    }

    const goToSlide = (index: number) => {
        currentIndex.value = index
        stopAutoplay()
        startAutoplay()
    }

    onMounted(() => {
        startAutoplay()
    })

    onUnmounted(() => {
        stopAutoplay()
    })

    return {
        promos,
        currentIndex,
        goToSlide
    }
}