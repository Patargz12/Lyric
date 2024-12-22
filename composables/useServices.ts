import { ref } from 'vue'
import type { Service } from '~/types/'

export function useServices() {
    const services = ref<Service[]>([
        {
            id: 1,
            title: 'Piano Tuning',
            modal_description: "A piano is more than an instrument—it's a work of art that needs care to maintain its beautiful sound. Regular tuning is essential for preserving the quality and performance of your piano. Here's why:",
            description: 'Has your piano fallen out of tune? Need expert repairs? Our skilled technicians will bring your piano back to its best condition. Contact us today.',
            image: '/services_pic1.png',
            benefits: [
                {
                    title: 'Maintains Optimal Sound Quality',
                    description: 'Tuning keeps each note pitch-perfect, ensuring the full richness of your pianos tone.'
                },
                {
                    title: 'Prolongs Piano Lifespan',
                    description: 'Regular tuning helps prevent long-term damage and wear.'
                },
                {
                    title: 'Enhances Playing Experience',
                    description: 'Enjoy the best touch and response from your keys with a finely-tuned piano.'
                }
            ]
        },
        {
            id: 2,
            title: 'Piano Rental',
            modal_description: "A piano is more than an instrument—it's a work of art that needs care to maintain its beautiful sound. Regular tuning is essential for preserving the quality and performance of your piano. Here's why:",
            description: 'Looking for the perfect accessories—chairs, books, or more—to complement your piano? Contact us for a wide selection of quality items.',
            image: '/services_pic2.png',
            benefits: [
                {
                    title: 'Flexible Options',
                    description: 'Choose from our wide selection of pianos for any occasion.'
                },
                {
                    title: 'Professional Service',
                    description: 'Expert delivery and setup included with every rental.'
                },
                {
                    title: 'Maintenance Included',
                    description: 'Regular tuning and maintenance included in rental period.'
                }
            ]
        },

        {
            id: 3,
            title: 'Piano Restoration and Repair',
            modal_description: "A piano is more than an instrument—it's a work of art that needs care to maintain its beautiful sound. Regular tuning is essential for preserving the quality and performance of your piano. Here's why:",
            description: 'Our expert team restores and repairs pianos to bring them back to their original glory. Perfect for preserving heirloom instruments or enhancing performance quality.',
            image: '/services_pic3.png',
            benefits: [
                {
                    title: 'Expert Restoration',
                    description: 'Craftsmanship to restore pianos to their original quality.'
                },
                {
                    title: 'Custom Repairs',
                    description: 'Tailored repair services for your specific needs.'
                }
            ]
        },
        {
            id: 4,
            title: 'Installation of Piano Player System',
            modal_description: "A piano is more than an instrument—it's a work of art that needs care to maintain its beautiful sound. Regular tuning is essential for preserving the quality and performance of your piano. Here's why:",
            description: 'Upgrade your piano with cutting-edge player systems for automated playback. Experience music like never before with seamless installation services.',
            image: '/services_pic4.png',
            benefits: [
                {
                    title: 'Modern Technology',
                    description: 'Seamless integration with advanced piano player systems.'
                },
                {
                    title: 'Professional Installation',
                    description: 'Experienced technicians ensure a flawless setup.'
                },
                {
                    title: 'Enhanced Experience',
                    description: 'Enjoy hands-free piano performances at any time.'
                }
            ]
        },
        {
            id: 5,
            title: 'Piano Hauling',
            modal_description: "A piano is more than an instrument—it's a work of art that needs care to maintain its beautiful sound. Regular tuning is essential for preserving the quality and performance of your piano. Here's why:",
            description: 'Safe and efficient transportation of your piano. Our team handles every detail to ensure your instrument arrives at its destination in perfect condition.',
            image: '/services_pic5.png',
            benefits: [
                {
                    title: 'Safe Transport',
                    description: 'Careful handling to protect your piano during transport.'
                },
                {
                    title: 'Reliable Team',
                    description: 'Trained professionals experienced in piano logistics.'
                }
            ]
        },
        {
            id: 6,
            title: 'Piano Special Color Wrapping',
            modal_description: "A piano is more than an instrument—it's a work of art that needs care to maintain its beautiful sound. Regular tuning is essential for preserving the quality and performance of your piano. Here's why:",
            description: 'Transform your piano with custom color wrapping. Choose from a variety of colors and finishes to match your style or event theme.',
            image: '/services_pic6.png',
            benefits: [
                {
                    title: 'Custom Designs',
                    description: 'Wide range of colors and finishes to match your vision.'
                },
                {
                    title: 'Durable Wrapping',
                    description: 'High-quality materials that protect and enhance the piano.'
                }
            ]
        },


    ])

    const addService = (service: Service) => {
        services.value.push(service)
    }

    const removeService = (id: number) => {
        services.value = services.value.filter(service => service.id !== id)
    }

    return {
        services,
        addService,
        removeService
    }
}