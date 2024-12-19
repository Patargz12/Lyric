import { ref, computed } from 'vue'
import type { Location, Tab } from '../types/'

export function useBranches() {
    const tabs: Tab[] = [
        { id: 'metro', name: 'Metro Manila' },
        { id: 'provincial', name: 'Provincial' }
    ]

    const locations: Location[] = [
        {
            id: 1,
            name: 'LYRIC HEAD OFFICE',
            image: '/branch_img1.png',
            address: '80 Florentina Bldg. Main Horseshoe Drive corner N. Domingo Street, New Manila, Quezon City',
            phone: '(0949) 6741960',
            website: 'lyrics.ph',
            region: 'metro'
        },
        {
            id: 2,
            name: 'AYALA MALLS MANILA BAY',
            image: '/branch_img1.png',
            address: 'Unit 4320, Ayala Malls Manila Bay, D. Macapagal Blvd.,Tambo, Paranaque City',
            phone: '(02) 7 004-4473',
            website: 'lyrics.ph',
            region: 'metro'
        },
        {
            id: 3,
            name: 'SM CITY NORTH EDSA',
            image: '/branch_img1.png',
            address: '3/F, Main Building, SM City North EDSA, North Avenue cor. EDSA, Quezon City',
            phone: '(02) 8 554-6213',
            website: 'lyrics.ph',
            region: 'metro'
        },
        {
            id: 3,
            name: 'SM CITY NORTH EDSA',
            image: '/branch_img1.png',
            address: '3/F, Main Building, SM City North EDSA, North Avenue cor. EDSA, Quezon City',
            phone: '(02) 8 554-6213',
            website: 'lyrics.ph',
            region: 'provincial'
        },
        {
            id: 3,
            name: 'SM CITY NORTH EDSA',
            image: '/branch_img1.png',
            address: '3/F, Main Building, SM City North EDSA, North Avenue cor. EDSA, Quezon City',
            phone: '(02) 8 554-6213',
            website: 'lyrics.ph',
            region: 'provincial'
        },
        {
            id: 3,
            name: 'SM CITY NORTH EDSA',
            image: '/branch_img1.png',
            address: '3/F, Main Building, SM City North EDSA, North Avenue cor. EDSA, Quezon City',
            phone: '(02) 8 554-6213',
            website: 'lyrics.ph',
            region: 'metro'
        },
        {
            id: 3,
            name: 'SM CITY NORTH EDSA',
            image: '/branch_img1.png',
            address: '3/F, Main Building, SM City North EDSA, North Avenue cor. EDSA, Quezon City',
            phone: '(02) 8 554-6213',
            website: 'lyrics.ph',
            region: 'metro'
        },
        {
            id: 3,
            name: 'SM CITY NORTH EDSA',
            image: '/branch_img1.png',
            address: '3/F, Main Building, SM City North EDSA, North Avenue cor. EDSA, Quezon City',
            phone: '(02) 8 554-6213',
            website: 'lyrics.ph',
            region: 'metro'
        },

        // Add more locations as needed
    ]

    const activeTab = ref<'metro' | 'provincial'>('metro')

    const setActiveTab = (tab: 'metro' | 'provincial') => {
        activeTab.value = tab
    }

    const filteredLocations = computed(() =>
        locations.filter(location => location.region === activeTab.value)
    )

    return {
        tabs,
        activeTab,
        setActiveTab,
        filteredLocations
    }
}