import { ref } from 'vue'
import type { RecitalEvent } from '~/types/'

export function useRecitals() {
    const events = ref<RecitalEvent[]>([
        {
            id: 1,
            title: 'Piano Lesson',
            daysLeft: 3,
            location: 'Lyric Main Hall, Manila',
            time: '3:00 PM - 6:00 PM',
            date: 'Saturday, November 12, 2024',
            additionalInfo: 'No information available'
        },
        {
            id: 2,
            title: 'Guitar Lesson',
            daysLeft: 3,
            location: 'Lyric Main Hall, Manila',
            time: '3:00 PM - 6:00 PM',
            date: 'Saturday, November 12, 2024',
            additionalInfo: 'Must be in .. attire. Don\'t forget to bring...'
        },
        {
            id: 3,
            title: 'Saxophone Lesson',
            daysLeft: 3,
            location: 'Lyric Main Hall, Manila',
            time: '3:00 PM - 6:00 PM',
            date: 'Saturday, November 12, 2024',
            additionalInfo: 'Must be in .. attire. Don\'t forget to bring...'
        },


    ])


    return {
        events,
    }
}