import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const navigationContext = {
    "avatar": "Z",
    "links": [{
        "title": "Home",
        "link": "https://developer.mozilla.org",
        "isCurrentPage": true
    }, {
        "title": "Whites",
        "link": "https://developer.mozilla.org",

    }, {
        "title": "Reds",
        "link": "https://developer.mozilla.org"
    }, {
        "title": "Blends",
        "link": "https://developer.mozilla.org"
    }]
}

const heroContent = {
    title: 'Rex Goliath',
    subtitle: 'His Royal Majesty is back.',
    imageUrl: '/rex-goliath-logo.png',
    description: `America's most unhinged rooster is out of retirement, and this time? He's mad
    as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
}

const heroButtonContext = [
    {
        "id": 1,
        "icon": faPlay,
        "text": "Drink",
        "isPrimary": true
    },
    {
        "id": 2,
        "icon": faInfoCircle,
        "text": "More Info"
    }
]

const heroImageContext = {
    imageUrl: "/wine-hero.webp",
    description: "Wine Bottles"
}

const wines = [{
    id: 1,
    imageUrl: '/red-wine.jpg',
    isNew: true,
    label: 'Wine',
    isFinished: true,
}, {
    id: 2,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
}, {
    id: 3,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isNew: true,
    isFinished: true,
}, {
    id: 4,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
}, {
    id: 5,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isNew: true,
    isFinished: true,
}, {
    id: 6,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
}, {
    id: 7,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
}, {
    id: 8,
    imageUrl: '/red-wine.jpg',
    label: 'Wine',
    isFinished: true,
}, {
    id: 1,
    imageUrl: '/red-wine.jpg',
    progress: 22,
    label: 'Wine',
}, {
    id: 2,
    imageUrl: '/red-wine.jpg',
    progress: 22,
    label: 'Wine',
}, {
    id: 3,
    imageUrl: '/red-wine.jpg',
    progress: 22,
    label: 'Wine',
}, {
    id: 4,
    imageUrl: '/red-wine.jpg',
    progress: 22,
    label: 'Wine',
}, {
    id: 5,
    imageUrl: '/red-wine.jpg',
    progress: 22,
    label: 'Wine',
}, {
    id: 6,
    imageUrl: '/red-wine.jpg',
    progress: 22,
    label: 'Wine',
}, {
    id: 7,
    imageUrl: '/red-wine.jpg',
    progress: 22,
    label: 'Wine',
}, {
    id: 8,
    imageUrl: '/red-wine.jpg',
    progress: 22,
    label: 'Wine',
}];

export { navigationContext, heroContent, heroButtonContext, heroImageContext, wines }