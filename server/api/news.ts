import { defineEventHandler } from 'h3'
import type { Article } from '~/types/article'

export default defineEventHandler((): Article[] => {
  return [
    {
      id: 1,
      title: 'JBL Commercial Releases New Affordable Mics',
      description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.',
      image: '/news_pic3.png',
      content: [
        {
          type: 'image',
          url: '/news_pic3.png',
          caption: 'New JBL Commercial microphone lineup'
        },
        {
          type: 'text',
          content: 'JBL Commercial has announced their latest lineup of affordable microphones...'
        }
      ],
      date: 'March 1, 2024',
      category: 'News',
      slug: 'jbl-new-mics'
    }
  ]
})