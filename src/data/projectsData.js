import Crypto from "../../src/assets/png/ProjectImages/crypto-tracker-banner.png"
import Netflix from "../../src/assets/png/ProjectImages/netflix-app-banner.png"
import FoodApp from "../../src/assets/png/ProjectImages/food-app-banner.png"
import Flatheads from "../../src/assets/png/ProjectImages/flat-heads-banner.png"
import ZaraHome from "../../src/assets/png/ProjectImages/zara-home-banner.png"
import CoSchedule from "../../src/assets/png/ProjectImages/co-schedule-banner.png"


export const projectsData = [
  {
    id: 1,
    projectName: "Crypto Tracker",
    projectDesc: [
      `A cryptocurrency tracker is a Web application, that allows you to keep track of how the value of coins is changing.`,
      [
        "Google authentication with help of firebase",
        "Historical chart display for every individual coin",
      ],
    ],
    tags: ["React", "materialui", "firebase"],
    code: 'https://github.com/ChadiveSreenath/crypto-hunter',
    demo: 'https://crypto-hunter-181ac.web.app/',
    image: Crypto
  },
  {
    id: 2,
    projectName: "Flatheads Clone",
    projectDesc: [
      "An e-com web application to shop for clothes and footwear for men and women.",
      [
        "User-friendly UI on all the pages",
        "Initialized firebase as BaaS",
        "Product catalog"
      ],
    ],
    tags: ["React", "javascript", "firebase"],
    code: 'https://github.com/ChadiveSreenath/flatheads-clone',
    demo: 'https://flatheads-eight.vercel.app/',
    image: Flatheads
  },
  {
    id: 3,
    projectName: "Netflix Frontend Clone",
    projectDesc: [
      'Netflix application clone where you can see list of movie and add your favourite movie to watchlist.',
      [
        ' User authentication and authorization',
        'user watchlist'
      ],
    ],
    tags: ["javascript", "React", 'css'],
    code: "https://github.com/ChadiveSreenath/Netflix-Clone",
    demo: "https://mini-netflix-clone-peach.vercel.app/",
    image: Netflix
  },
  {
    id: 4,
    projectName: 'Mini-food App',
    projectDesc: [
      'mini food application where you can explore various types of food items with attractive user interface',
      [
        'filter food by types and price',
      ]
    ],
    tags: ['React', 'Css'],
    code: 'https://github.com/ChadiveSreenath/mini-food-app',
    demo: 'https://mini-food-app-chadivesreenath.vercel.app/',
    image: FoodApp
  },
  {
    id: 5,
    projectName: 'Co-Schedule Clone',
    projectDesc: [
      'CoSchedule is Planning ,Organising and executing all things content marketing',
      [
        "Individual Project Built Within 5 days",
        'User-friendly UI',
      ]
    ],
    tags: ['JavaScript', 'Html', 'Css'],
    code: 'https://github.com/ChadiveSreenath/Co-Schedule',
    demo: 'https://co-schedule.vercel.app/',
    image: CoSchedule
  },
  {
    id: 6,
    projectName: 'Zara Home Clone',
    projectDesc: [
      'A humanitarian website that is dedicated to the manufacturing of home textiles.',
      [
        'Payment page',
        'Sign-in/Sign-up'
      ]
    ],
    tags: ['Javascript', "HTml", 'Css'],
    code: 'https://github.com/ChadiveSreenath/Zara-Home',
    demo: 'https://zara-home-clone.netlify.app/',
    image: ZaraHome
  },

];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
