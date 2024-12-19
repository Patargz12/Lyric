import { ref } from 'vue'
import type { Service } from '~/types/'

export function useSetups() {
    const setups = ref<Service[]>([
        {
            id: 1,
            title: 'Amplifier Assistance',
            modal_description: "Your amplifier is the backbone of your sound system. Regular maintenance and troubleshooting ensure it consistently delivers exceptional sound quality and reliability during performances.",
            description: 'Troubleshooting, maintenance, and recommendations to keep your amplifier performing at its best.',
            image: '/setup_pic1.png',
            benefits: [
                {
                    title: 'Performance Optimization',
                    description: 'Ensure your amplifier delivers peak sound quality.'
                },
                {
                    title: 'Expert Diagnostics',
                    description: 'Identify and resolve common amplifier issues.'
                },
                {
                    title: 'Tailored Recommendations',
                    description: 'Get advice on the best settings and upgrades for your needs.'
                }
            ]
        },
        {
            id: 2,
            title: 'Instrument Restringing',
            modal_description: "A well-strung instrument produces vibrant tones and enhances playability. Trust our professional restringing service to bring your guitar or string instrument back to life with precision and care.",
            description: 'Professional restringing services for guitars and other string instruments, ensuring great sound quality and playability.',
            image: '/setup_pic2.png',
            benefits: [
                {
                    title: 'Enhanced Sound Quality',
                    description: 'Restore your instrument’s vibrant tone.'
                },
                {
                    title: 'Quick Turnaround',
                    description: 'Get your instrument restrung and ready to play fast.'
                }
            ]
        },
        {
            id: 3,
            title: 'Mixer Consultation',
            modal_description: "Your mixer is the heart of your audio setup. Our consultation services ensure it’s optimized for studio or live performances, delivering clarity, balance, and precision to your sound.",
            description: 'Expert help with setting up and optimizing your mixer for live or studio use.',
            image: '/setup_pic3.png',
            benefits: [
                {
                    title: 'Customized Setup',
                    description: 'Tailored mixer configurations for your specific needs.'
                },
                {
                    title: 'Noise Reduction Tips',
                    description: 'Learn techniques to minimize unwanted sound interference.'
                },
                {
                    title: 'Studio & Live Support',
                    description: 'Guidance for both professional studio setups and live performances.'
                }
            ]
        },
        {
            id: 4,
            title: 'In-Store Support',
            modal_description: "Get personalized, hands-on assistance from our experts. Whether you're seeking advice, troubleshooting help, or product recommendations, our in-store support ensures a seamless experience.",
            description: 'Visit us for hands-on assistance, product inquiries, and expert advice for all your electronic music gear.',
            image: '/setup_pic4.png',
            benefits: [
                {
                    title: 'Hands-On Guidance',
                    description: 'Get personalized demos and setup assistance.'
                },
                {
                    title: 'Product Expertise',
                    description: 'Our team helps you choose the perfect gear for your needs.'
                }
            ],
        },


    ]);



    const addService = (service: Service) => {
        setups.value.push(service)
    }

    const removeService = (id: number) => {
        setups.value = setups.value.filter(service => service.id !== id)
    }

    return {
        setups,
        addService,
        removeService
    }
}