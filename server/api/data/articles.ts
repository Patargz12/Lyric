export interface Article {
    id: number
    title: string
    description: string
    image: string
    content: Array<{
        type: 'text' | 'image'
        content?: string
        url?: string
        caption?: string
    }>
    date: string
    category: string
    slug: string
}

export const articles: Article[] =
    [
        // NEWS_HERE

        {
            id: 1,
            title: 'NEWS 1',
            description: 'Testing News',
            image: '/news_pic1.png',
            content: [
                {
                    type: 'text',
                    content: 'She looks like a typical wholesome young lady in her cardigan, loose shirt, and sneakers...'
                },
                {
                    type: 'image',
                    url: '/drummer1.jpg',
                    caption: 'Senri Kawaguchi performing live'
                },
                {
                    type: 'text',
                    content: 'She hits the snare—a Yamaha Absolute Hybrid Maple—and extracts a loud fat snappy tone...'
                }
            ],
            date: 'March 1, 2024',
            category: 'News',
            slug: 'news1'
        },
        {
            id: 2,
            title: 'NEWS 2',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JBL Commercial has announced their latest lineup of affordable microphones...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JWDADWAWDWADWD.'
                }
            ],
            date: 'March 1, 2024',
            category: 'News',
            slug: 'news2'
        },
        {
            id: 3,
            title: 'NEWS 3',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.',
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
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JWDADWAWDWADWD.'
                }
            ],
            date: 'March 1, 2024',
            category: 'News',
            slug: 'news3'
        },
        {
            id: 4,
            title: 'NEWS 4',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.',
            image: '/news_pic4.png',
            content: [
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JBL Commercial has announced their latest lineup of affordable microphones...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JWDADWAWDWADWD.'
                }
            ],
            date: 'March 1, 2024',
            category: 'News',
            slug: 'news4'
        },
        {
            id: 5,
            title: 'NEWS 5',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.',
            image: '/news_pic5.png',
            content: [
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JBL Commercial has announced their latest lineup of affordable microphones...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JWDADWAWDWADWD.'
                }
            ],
            date: 'March 1, 2024',
            category: 'News',
            slug: 'news5'
        },
        {
            id: 6,
            title: 'NEWS 6',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.',
            image: '/news_pic6.png',
            content: [
                {
                    type: 'image',
                    url: '/news_pic4.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JBL Commercial has announced their latest lineup of affordable microphones...'
                },
                {
                    type: 'image',
                    url: '/news_pic5.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JWDADWAWDWADWD.'
                }
            ],
            date: 'March 1, 2024',
            category: 'News',
            slug: 'news6'
        },
        {
            id: 7,
            title: 'NEWS 7',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.',
            image: '/news_pic6.png',
            content: [
                {
                    type: 'image',
                    url: '/news_pic4.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JBL Commercial has announced their latest lineup of affordable microphones...'
                },
                {
                    type: 'image',
                    url: '/news_pic5.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JWDADWAWDWADWD.'
                }
            ],
            date: 'March 1, 2024',
            category: 'News',
            slug: 'news7'
        },


        {
            id: 8,
            title: 'NEWS 8',
            description: 'Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.Lorem ipsum dolor sit amet consectetur. Placerat diam suspendisse aliquet massa at.',
            image: '/news_pic6.png',
            content: [
                {
                    type: 'image',
                    url: '/news_pic4.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JBL Commercial has announced their latest lineup of affordable microphones...'
                },
                {
                    type: 'image',
                    url: '/news_pic5.png',
                    caption: 'New JBL Commercial microphone lineup'
                },
                {
                    type: 'text',
                    content: 'JWDADWAWDWADWD.'
                }
            ],
            date: 'March 1, 2024',
            category: 'News',
            slug: 'news8'
        },


        // PRESS_HERE

        {
            id: 1,
            title: 'PRESS 1',
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
            category: 'Press',
            slug: 'press1'
        },
        {
            id: 2,
            title: 'PRESS 2',
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
            category: 'Press',
            slug: 'press2'
        },

        // EVENTS_HERE

        {
            id: 1,
            title: 'EVENT 1',
            description: 'Join us for an exciting evening of music and networking.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'This is a grand event featuring performances from top artists and special guest speakers...'
                },
                {
                    type: 'image',
                    url: '/event1.jpg',
                    caption: 'Crowd enjoying the event'
                }
            ],
            date: 'April 15, 2024',
            category: 'Event',
            slug: 'event1'
        },
        {
            id: 2,
            title: 'EVENT 2',
            description: 'A day dedicated to innovation and creativity in technology.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Discover the latest trends in technology with hands-on workshops and keynotes from industry leaders...'
                },
                {
                    type: 'image',
                    url: '/event2.jpg',
                    caption: 'Tech expo showcasing new gadgets'
                }
            ],
            date: 'May 10, 2024',
            category: 'Event',
            slug: 'event2'
        },

        // BLOGS_HERE

        {
            id: 1,
            title: 'BLOG 1',
            description: 'Exploring the intersection of technology and music.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'The rise of AI in the music industry has opened doors to innovation and new possibilities...'
                },
                {
                    type: 'image',
                    url: '/blog1.jpg',
                    caption: 'AI-generated music beats'
                }
            ],
            date: 'June 1, 2024',
            category: 'Blog',
            slug: 'blog1'
        },
        {
            id: 2,
            title: 'BLOG 2',
            description: 'A guide to finding the best equipment for your home studio.',
            image: '/news_pic3.png',
            content: [
                {
                    type: 'text',
                    content: 'Building a home studio requires careful consideration of acoustics, equipment, and budget...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'Home studio setup'
                }
            ],
            date: 'July 5, 2024',
            category: 'Blog',
            slug: 'blog2'
        },
        {
            id: 3,
            title: 'BLOG 3',
            description: 'A guide to finding the best equipment for your home studio.',
            image: '/news_pic3.png',
            content: [
                {
                    type: 'text',
                    content: 'Building a home studio requires careful consideration of acoustics, equipment, and budget...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'Home studio setup'
                }
            ],
            date: 'July 5, 2024',
            category: 'Blog',
            slug: 'blog3'
        },
        {
            id: 4,
            title: 'BLOG 4',
            description: 'How to perfect your mixing techniques in music production.',
            image: '/news_pic3.png',
            content: [
                {
                    type: 'text',
                    content: 'Mixing music requires a balance of technical skills and creativity...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'Mixing console'
                }
            ],
            date: 'July 15, 2024',
            category: 'Blog',
            slug: 'blog4'
        },
        {
            id: 5,
            title: 'BLOG 5',
            description: 'Top 10 tips for beginner musicians.',
            image: '/news_pic3.png',
            content: [
                {
                    type: 'text',
                    content: 'Starting your music journey can be overwhelming, but these tips will help you hit the right note...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'Beginner guitarist'
                }
            ],
            date: 'July 20, 2024',
            category: 'Blog',
            slug: 'blog5'
        },
        {
            id: 6,
            title: 'BLOG 6',
            description: 'Understanding the basics of sound design.',
            image: '/news_pic3.png',
            content: [
                {
                    type: 'text',
                    content: 'Sound design is an essential part of creating immersive experiences in music and media...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'Sound design workspace'
                }
            ],
            date: 'August 1, 2024',
            category: 'Blog',
            slug: 'blog6'
        },
        {
            id: 7,
            title: 'BLOG 7',
            description: 'The importance of acoustic treatment in studios.',
            image: '/news_pic3.png',
            content: [
                {
                    type: 'text',
                    content: 'Acoustic treatment can make a significant difference in sound quality and clarity...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'Acoustic panels in a studio'
                }
            ],
            date: 'August 10, 2024',
            category: 'Blog',
            slug: 'blog7'
        },
        {
            id: 8,
            title: 'BLOG 8',
            description: 'Exploring the history of electronic music.',
            image: '/news_pic3.png',
            content: [
                {
                    type: 'text',
                    content: 'Electronic music has evolved significantly over the decades, influencing various genres...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'Synthesizer setup'
                }
            ],
            date: 'August 20, 2024',
            category: 'Blog',
            slug: 'blog8'
        },
        {
            id: 9,
            title: 'BLOG 9',
            description: 'How to monetize your music career effectively.',
            image: '/news_pic3.png',
            content: [
                {
                    type: 'text',
                    content: 'Turning your passion for music into a sustainable career requires strategic planning...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'Musician at work'
                }
            ],
            date: 'August 25, 2024',
            category: 'Blog',
            slug: 'blog9'
        },
        {
            id: 10,
            title: 'BLOG 10',
            description: 'The role of mastering in finalizing music tracks.',
            image: '/news_pic3.png',
            content: [
                {
                    type: 'text',
                    content: 'Mastering ensures that your tracks sound polished and consistent across platforms...'
                },
                {
                    type: 'image',
                    url: '/news_pic3.png',
                    caption: 'Mastering equipment'
                }
            ],
            date: 'September 1, 2024',
            category: 'Blog',
            slug: 'blog10'
        },

        {
            id: 11,
            title: 'BLOG 11',
            description: 'Tips for improving your live performances.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Live performances are all about connecting with your audience and delivering a memorable experience...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Musician on stage'
                }
            ],
            date: 'September 5, 2024',
            category: 'Blog',
            slug: 'blog11'
        },
        {
            id: 12,
            title: 'BLOG 12',
            description: 'Exploring the best DAWs for music production.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Digital Audio Workstations (DAWs) are the backbone of modern music production...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'DAW interface'
                }
            ],
            date: 'September 10, 2024',
            category: 'Blog',
            slug: 'blog12'
        },
        {
            id: 13,
            title: 'BLOG 13',
            description: 'How to create engaging music videos.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'A music video can amplify your song’s reach and impact by telling a visual story...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Music video production'
                }
            ],
            date: 'September 15, 2024',
            category: 'Blog',
            slug: 'blog13'
        },
        {
            id: 14,
            title: 'BLOG 14',
            description: 'Understanding the basics of MIDI technology.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'MIDI (Musical Instrument Digital Interface) has revolutionized the way music is composed and produced...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'MIDI controller in action'
                }
            ],
            date: 'September 20, 2024',
            category: 'Blog',
            slug: 'blog14'
        },
        {
            id: 15,
            title: 'BLOG 15',
            description: 'How to collaborate effectively with other musicians.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Collaboration can open doors to new ideas and opportunities in music creation...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Collaborating in the studio'
                }
            ],
            date: 'September 25, 2024',
            category: 'Blog',
            slug: 'blog15'
        },
        {
            id: 16,
            title: 'BLOG 16',
            description: 'The evolution of music streaming platforms.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Music streaming has transformed the way audiences consume and discover music...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Music streaming services'
                }
            ],
            date: 'October 1, 2024',
            category: 'Blog',
            slug: 'blog16'
        },
        {
            id: 17,
            title: 'BLOG 17',
            description: 'Breaking down the science of sound waves.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Understanding sound waves can help musicians and producers shape their sound more effectively...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Visual representation of sound waves'
                }
            ],
            date: 'October 5, 2024',
            category: 'Blog',
            slug: 'blog17'
        },
        {
            id: 18,
            title: 'BLOG 18',
            description: 'Essential gear every touring musician needs.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Touring musicians need reliable gear that ensures smooth performances and logistics...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Touring gear essentials'
                }
            ],
            date: 'October 10, 2024',
            category: 'Blog',
            slug: 'blog18'
        },
        {
            id: 19,
            title: 'BLOG 19',
            description: 'How to market your music independently.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Independent musicians can leverage digital platforms and strategies to market their music effectively...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Musician using social media'
                }
            ],
            date: 'October 15, 2024',
            category: 'Blog',
            slug: 'blog19'
        },
        {
            id: 20,
            title: 'BLOG 20',
            description: 'The future of virtual reality in music experiences.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Virtual reality is shaping the future of immersive music experiences, from concerts to studio sessions...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'VR concert simulation'
                }
            ],
            date: 'October 20, 2024',
            category: 'Blog',
            slug: 'blog20'
        },
        {
            id: 21,
            title: 'BLOG 21',
            description: 'Why mental health matters for musicians.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'The music industry can be stressful, and mental health is essential for long-term success...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Musician meditating'
                }
            ],
            date: 'October 25, 2024',
            category: 'Blog',
            slug: 'blog21'
        },
        {
            id: 22,
            title: 'BLOG 22',
            description: 'How to record high-quality vocals at home.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Recording high-quality vocals at home requires the right equipment, acoustics, and techniques...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Home vocal recording setup'
                }
            ],
            date: 'November 1, 2024',
            category: 'Blog',
            slug: 'blog22'
        },
        {
            id: 23,
            title: 'BLOG 23',
            description: 'The history and evolution of hip-hop music.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Hip-hop has grown from its roots in the Bronx to a global phenomenon...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Hip-hop culture'
                }
            ],
            date: 'November 5, 2024',
            category: 'Blog',
            slug: 'blog23'
        },
        {
            id: 24,
            title: 'BLOG 24',
            description: 'Top 5 tips for mastering your tracks.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Mastering is the final step to make your tracks sound polished and professional...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Audio mastering process'
                }
            ],
            date: 'November 10, 2024',
            category: 'Blog',
            slug: 'blog24'
        },
        {
            id: 25,
            title: 'BLOG 25',
            description: 'How to use synthesizers creatively.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Synthesizers are powerful tools for creating unique sounds and textures in your music...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Synthesizer in action'
                }
            ],
            date: 'November 15, 2024',
            category: 'Blog',
            slug: 'blog25'
        },
        {
            id: 26,
            title: 'BLOG 26',
            description: 'How to distribute your music online.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Music distribution platforms make it easier than ever to get your songs on streaming services...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Music distribution platforms'
                }
            ],
            date: 'November 20, 2024',
            category: 'Blog',
            slug: 'blog26'
        },
        {
            id: 27,
            title: 'BLOG 27',
            description: 'How to set up a rehearsal space on a budget.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Creating a functional rehearsal space doesn’t have to break the bank...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Affordable rehearsal space'
                }
            ],
            date: 'November 25, 2024',
            category: 'Blog',
            slug: 'blog27'
        },
        {
            id: 28,
            title: 'BLOG 28',
            description: 'How to promote your gigs effectively.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Promoting your gigs effectively requires a mix of social media, word-of-mouth, and local partnerships...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Gig promotion flyer'
                }
            ],
            date: 'December 1, 2024',
            category: 'Blog',
            slug: 'blog28'
        },
        {
            id: 29,
            title: 'BLOG 29',
            description: 'Understanding the basics of audio compression.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Audio compression helps control the dynamic range of your tracks for a balanced sound...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Audio compressor plugin'
                }
            ],
            date: 'December 5, 2024',
            category: 'Blog',
            slug: 'blog29'
        },
        {
            id: 30,
            title: 'BLOG 30',
            description: 'The art of creating compelling album artwork.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Album artwork is an important aspect of your music’s visual identity...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Album cover design'
                }
            ],
            date: 'December 10, 2024',
            category: 'Blog',
            slug: 'blog30'
        },
        {
            id: 31,
            title: 'BLOG 31',
            description: 'How to use effects processors creatively.',
            image: '/news_pic2.png',
            content: [
                {
                    type: 'text',
                    content: 'Effects processors like reverb, delay, and distortion can add depth and character to your music...'
                },
                {
                    type: 'image',
                    url: '/news_pic2.png',
                    caption: 'Effects processor in action'
                }
            ],
            date: 'December 15, 2024',
            category: 'Blog',
            slug: 'blog31'
        }



    ]