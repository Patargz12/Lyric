import { ref } from 'vue'
import type { Service } from '~/types/'

export function useSupports() {
    const supports = ref<Service[]>([
        {
            id: 1,
            title: 'Amps and Effects',
            modal_description: "Take your sound to the next level with customized installation of amplifiers and effects. Whether for home or studio use, our experts ensure every detail is optimized for a premium audio experience.",
            description: 'Custom installation of speakers, amplifiers, and sound systems for the ultimate home audio experience.',
            image: '/support_pic1.png',
            benefits: [
                {
                    title: 'Tailored Installations',
                    description: 'Custom setups designed for your specific space and needs.'
                },
                {
                    title: 'Enhanced Sound Quality',
                    description: 'Achieve clear and immersive audio for any setting.'
                },
                {
                    title: 'Professional Expertise',
                    description: 'Handled by skilled technicians to ensure flawless execution.'
                }
            ]
        },
        {
            id: 2,
            title: 'Digital Pianos / Keyboards',
            modal_description: "Bring out the best in your performances with seamless audio installations for digital pianos and keyboards. Perfect for both live events and personal setups.",
            description: 'Temporary audio installations for events or performances, including speakers, microphones, and mixers.',
            image: '/support_pic2.png',
            benefits: [
                {
                    title: 'Versatile Setup Options',
                    description: 'Adaptable solutions for performances or personal practice.'
                },
                {
                    title: 'Event-Ready Systems',
                    description: 'Quick and efficient installations tailored for live events.'
                }
            ]
        },
        {
            id: 3,
            title: 'Speaker System',
            modal_description: "Transform your space with a professionally installed speaker system. Designed for clarity and consistent sound, perfect for businesses or personal enjoyment.",
            description: 'Professional setup for restaurants, retail stores, or offices, designed for clear, consistent sound throughout the space.',
            image: '/support_pic3.png',
            benefits: [
                {
                    title: 'Clear Audio Coverage',
                    description: 'Ensure consistent sound quality across the entire space.'
                },
                {
                    title: 'Customized Solutions',
                    description: 'Designs tailored for commercial or personal environments.'
                },
                {
                    title: 'Seamless Integration',
                    description: 'Blends effortlessly into your space for a clean look.'
                }
            ]
        },
        {
            id: 4,
            title: 'Interface and Processors',
            modal_description: "Fine-tune your audio setup with expert adjustments to interfaces and processors. Achieve perfect balance and clarity in any environment.",
            description: 'Fine-tuning and balancing of your audio system for the best possible sound quality, tailored to your specific environment.',
            image: '/support_pic4.png',
            benefits: [
                {
                    title: 'Optimal Sound Balance',
                    description: 'Ensure every note and tone is perfectly calibrated.'
                },
                {
                    title: 'Advanced Customization',
                    description: 'Settings tailored to your specific preferences and equipment.'
                },
                {
                    title: 'Professional Support',
                    description: 'Guided by experts to bring out the best in your system.'
                }
            ]
        }
    ]);


    const addService = (service: Service) => {
        supports.value.push(service)
    }

    const removeService = (id: number) => {
        supports.value = supports.value.filter(service => service.id !== id)
    }

    return {
        supports,
        addService,
        removeService
    }
}