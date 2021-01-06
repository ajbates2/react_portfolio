import SafeRes_screen from './images/SafeRes_screen.png'
import tips_screen from './images/tips_screen.png'
import bf_screen from './images/bfscreen.png'
import quiz_screen from './images/quiz-screenshot.png'

const STORE = [
    {
        name: 'SafeRes',
        bio: `The pandemic brought on a lot of hurdles to overcome in the service industry. One big issue was state-mandated reservations for all restaurants. I saw this as a great opportunity to create a user experience we haven't taken advantage of at the bar we worked at. Not only was this a way to contact people for their reservations, but it also makes it easier for us to contact people if there was an outbreak.`,
        screenshot: SafeRes_screen,
        links: {
            clientRepo: `https://github.com/ajbates2/SafeRes-client`,
            serverRepo: `https://github.com/ajbates2/SafeRes-api`,
            liveSite: `https://safe-res-client.vercel.app/`,
        },
        techUsed: {
            html: true,
            css: true,
            jQuery: false,
            react: true,
            node: true,
            postgresql: true
        }
    },
    {
        name: 'tips.',
        bio: `An app designed to help servers and bartenders keep better track of their income. I have worked in the service industry since I was twelve years old. One thing I didn't realize for a long time, is that if you actually know how much money you are making, the easier it is to save money. So I built this app to empower people in the service industry to take control of their income.`,
        screenshot: tips_screen,
        links: {
            clientRepo: `https://github.com/ajbates2/tips`,
            serverRepo: `https://github.com/ajbates2/tips-api`,
            liveSite: `https://www.tipsdontlie.com/`,
        },
        techUsed: {
            html: true,
            css: true,
            jQuery: false,
            react: true,
            node: true,
            postgresql: true
        }
    },
    {
        name: 'BrewFinder',
        bio: `A relatively simple app that utilizes the google map API to place data from an open-source brewery database. The user searches for a city and the app fetches data from the brewery database. That data is then used to place markers on the map. The user can then click on a marker to get the relevant information.`,
        screenshot: bf_screen,
        links: {
            clientRepo: `https://github.com/ajbates2/BrewFinder`,
            serverRepo: null,
            liveSite: `https://ajbates2.github.io/BrewFinder/`,
        },
        techUsed: {
            html: true,
            css: true,
            jQuery: true,
            react: false,
            node: false,
            postgresql: false
        }
    },
    {
        name: 'Coronavirus Quiz',
        bio: `A simple quiz testing your knowledge on the current pandemic sweeping the planet. I started building this app right at the end of March, and added some mild Resident Evil references to add some levity to the crazy time we were going through.`,
        screenshot: quiz_screen,
        links: {
            clientRepo: `https://github.com/ajbates2/coronavirus-quiz`,
            serverRepo: null,
            liveSite: `https://ajbates2.github.io/coronavirus-quiz/landing.html`,
        },
        techUsed: {
            html: true,
            css: true,
            jQuery: true,
            react: false,
            node: false,
            postgresql: false
        }
    },
]

export default STORE