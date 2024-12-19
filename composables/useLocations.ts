import { ref } from 'vue'
import type { Location } from '~/types/'

export function useLocations() {
    const locations = ref<Location[]>([
        {
            id: 1,
            name: 'SM MEGAMALL',
            address: '4/F, Building B, SM Megamall, Mandaluyong City',
            phone: '(02) 8 634-0210',
            website: 'lyrics.ph',
            image: '/school1.png'
        },
        {
            id: 2,
            name: 'SM MALL OF ASIA',
            address: 'Ground floor, South Wing, Mall of Asia, J.W. Diokno Blvd., Pasay City',
            phone: '7758-1080',
            website: 'lyrics.ph',
            image: '/school2_new.png'
        },
        {
            id: 3,
            name: 'SM BACOOR',
            address: '3rd floor, SM City Bacoor, Habay 2, Bacoor, Cavite City',
            phone: '(046) 537-7673',
            website: 'lyrics.ph',
            image: '/school3.png'
        },
        {
            id: 4,
            name: 'SM CITY LIPA',
            address: 'Ground floor, Space No. 107A, SM City Lipa, Lipa City, Batangas',
            phone: '(043) 981-2885',
            website: 'lyrics.ph',
            image: '/school4.png'
        },
        {
            id: 5,
            name: 'SM CITY BATANGAS',
            address: 'Ground floor, SM City Batangas, 129 Pallocan West, Batangas City',
            phone: '(043) 980-3575',
            website: 'lyrics.ph',
            image: '/school5.png'
        },
        {
            id: 6,
            name: 'SM PAMPANGA',
            address: 'Ground floor, SM City Pampanga, San Fernando, Pampanga',
            phone: '(045) 455-0887',
            website: 'lyrics.ph',
            image: '/school6.png'
        },


    ])

    const addLocation = (location: Location) => {
        locations.value.push(location)
    }

    const removeLocation = (id: string) => {
        locations.value = locations.value.filter(location => location.id !== id)
    }

    return {
        locations,
        addLocation,
        removeLocation
    }
}