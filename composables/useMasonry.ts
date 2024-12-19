import { ref } from 'vue'
import type { Service } from '~/types/'

export function useMasonry() {
    const services = ref<Service[]>([
        {
            id: 1,
            title: 'Piano Tuning',
            description: 'Has your piano fallen out of tune? Need expert repairs? Our skilled technicians will bring your piano back to its best condition. Contact us today.',
            image: '/services_pic1.png'
        },
        {
            id: 2,
            title: 'Piano Rental',
            description: 'Looking for the perfect accessories—chairs, books, or more—to complement your piano? Contact us for a wide selection of quality items.',
            image: '/services_pic2.png'
        },
        {
            id: 3,
            title: 'Piano Restoration and Repair',
            description: 'Need a grand piano for an upcoming event? We offer rentals and custom restoration services to make your event special. Contact us for more details.',
            image: '/services_pic3.png'
        },
        {
            id: 4,
            title: 'Installation of Piano Player System',
            description: 'Whether you need spare parts to refurbish your piano or professional transport to move it safely, we\'ve got you covered. Contact us for reliable solutions.',
            image: '/services_pic4.png'
        },
        {
            id: 5,
            title: 'Piano Maintenance',
            description: 'Regular maintenance is key to keeping your piano in perfect condition. Our expert technicians provide comprehensive maintenance services.',
            image: '/services_pic5.png'
        },
        {
            id: 6,
            title: 'Piano Lessons',
            description: 'Learn to play the piano with our experienced instructors. We offer lessons for all skill levels, from beginners to advanced players.',
            image: '/services_pic6.png'
        }
    ])

    return {
        services
    }
}