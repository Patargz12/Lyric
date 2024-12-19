import { ref } from 'vue'
import type { Lesson } from '~/types/'

export function useLessons() {
    const lessons = ref<Lesson[]>([
        { id: 1, title: 'Piano Lesson', image: '/lesson_pic1.png' },
        { id: 2, title: 'Guitar Lesson', image: '/lesson_pic2.png' },
        { id: 3, title: 'Violin Lesson', image: '/lesson_pic3.png' },
        { id: 4, title: 'Flute Lesson', image: '/lesson_pic4.png' },
        { id: 5, title: 'Ukulele Lesson', image: '/lesson_pic5.png' },
        { id: 6, title: 'Viola Lesson', image: '/lesson_pic6.png' },
        { id: 7, title: 'Bass Lesson', image: '/lesson_pic7.png' },
        { id: 8, title: 'Drum Lesson', image: '/lesson_pic8.png' },
        { id: 9, title: 'Percussion Lesson', image: '/lesson_pic9.png' },
        { id: 10, title: 'Voice Lesson', image: '/lesson_pic10.png' },
        { id: 11, title: 'Organ Lesson', image: '/lesson_pic11.png' },
        { id: 12, title: 'Saxophone Lesson', image: '/lesson_pic12.png' },

    ])

    return {
        lessons
    }
}
