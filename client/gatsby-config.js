require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  pathPrefix: `/kardelis`,
  siteMetadata: {
    title: `Karkdelis`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    header: {
      nav: [
        {
          name: "Domov",
          slug: "#domov"
        },
        {
          name: "Služby",
          slug: "#sluzby"
        },
        {
          name: "Partneri",
          slug: "#partneri"
        },

        {
          name: "Galéria",
          slug: "#galeria"
        },
        {
          name: "Kontakt",
          slug: "#kontakt"
        }
      ]
    },

    heroSection: {
      heading: "Krása sa skladá z maličkostí",
      social: [
        {
          name: "Facebook",
          link: "www.facebook.com"
        },
        {
          name: "Instagram",
          link: "www.instagram.com"
        }
      ]
    },

    services: [
      {
        id: 'nechty',
        img: "nechty.png",
        title: "Nechty",
        heading: "Manikúra",
        desc: `Zverte svoje ruky do rúk odborníkom,či už klasicka manikúra,lakovanie,gelove či akrylovej nechty a gél-lak.Obrovsky vyber farieb,kvalitny materiál a profesionálny prístup Vám zaručí že Vaše nechty môžu vyzerať dokonale až po dobu štyroch týždňov.Radi Vás privítame,pridite sa k nám presvedčiť.`,
        pricing: {
          title: "Cennik manikura",
          additional: '',

          services: [
            {
              name: 'Klasická manikúra',
              price: "15"
            },
            {
              name: 'Odlakovanie',
              price: "2"
            },
            {
              name: 'Lakovanie farebným lakom',
              price: "4"
            },
            {
              name: 'Lakovanie gél-lakom',
              price: "20"
            },
            {
              name: 'Odstránenie gél-laku',
              price: "0.10"
            },
            {
              name: 'Gelové/akrylove nechty - nové',
              price: "35-38"
            },
            {
              name: 'Gelové/akrylové nechty – doplnenie',
              price: "25"
            },
            {
              name: 'Gelové/akrylové nechty – špecialne zdobenie',
              price: "5-10"
            },
            {
              name: 'Vytvrdenie prírodných nechtov gélom',
              price: "25"
            },
            {
              name: 'Vytvrdenie prírodných nechtov gélom',
              price: "15"
            },
          ]
        }
      },
      {
        id: 'kozmetika',
        img: "kozmetika.png",
        title: "Kozmetika",
        heading: "Kozmetika",
        desc:`Buďte náročná,jedinečná,krasna a vzácna tak ako naša pokožka. Ponúkame Vám prístrojové kozmetické ošetrenia šité na mieru s Exkluzívne registrovanou obchodnou značkou Diego dalla palma,ktorá v sebe spája typicky taliansky pôvab a spoľahlivosť vedeckého výskumu.Profesionalny prístup,relax,príjemná atmosféra ,únik s každodenného stereotypu,to všetko a omnoho viac Vás čaká v prijemnom prostredí nášho studia.Doprajte si pocit jedinečnosti práve u Nás`,
        pricing: {
          title: "Kozmetika",
          additional: '',
          services: [
            {
              name: "Základné čistenie pleti ultrazvukom",
              price: "30"
            },
            {
              name: "Galvanizácia",
              price: "10"
            },
            {
              name: "Masáž tváre, krku adekoltu",
              price: "13"
            },
            {
              name: "Masáž tváre, krku adekoltu (predĺžená)",
              price: "20"
            },
            {
              name: "Kompletné ošetrenie pleti + /radiofrekvencia/",
              price: "50"
            },
            {
              name: "Kompletné ošetrenie pleti + /radiofrekvencia,masaž",
              price: "55"
            },
            {
              name: "Hydropeel(čistenie vodou)",
              price: "38"
            },
            {
              name: "Diamantová mikrodermabrazi",
              price: "25"
            },
            {
              name: "Rádiofrekvencia /tvár + maska/",
              price: "28"
            },
            {
              name: "Rádiofrekvencia /tvár, krk + maska/",
              price: "40"
            },
            {
              name: "Rádiofrekvencia  /tvár, krk, dekolt + maska/",
              price: "50"
            },
            {
              name: "Dermabotoxín ošetrenie",
              price: "35"
            },
            {
              name: "Chemický peeling /tvár/",
              price: "30"
            },
            {
              name: "Chemický peeling /dekolt/",
              price: "10"
            },
            {
              name: "Chemický peeling /chrbát/",
              price: "15"
            },
            {
              name: "Úprava obočia",
              price: "3"
            },
            {
              name: "Farbenie obočia",
              price: "3"
            },
            {
              name: "Farbenie rias",
              price: "3"
            },
          ]
        }
      },
      {
        id: 'make-up',
        img: "make-up.png",
        title: "Make Up",
        heading: "Permanentný Make-up (Pmu)",
        desc: `Je skvelou pomôckou hlavne pre tie z Vás ktoré už nebaví každodenne licenie či už obočia,liniek a pier.Pri profesionálnom prevedení šetrí čas a zvýrazní pekne črty tvare. Dnes už je v ponuke nielen možnosť výberu vysokokvalitných pigmentov ,ale rovnako tak aj možnosť výberu v technike Pmu. Napríklad microbading s 3D efektom,ktoré reálne napodobňuje chĺpky obočia,alebo pudrové či podtienované obocie,poprípade kombinovaná technika.
Zverte sa do rúk profesionálov a zobudzajte sa každé ráno dokonale upravená.`,
        pricing: {
          title: "Visage",
          additional: "Tetovanie - Cena záleží od konečného motívu, veľkosti, náročnosti, farebnosti. Základná cena unás je od 40€.",
          services: [
            {
              name: "Denné líčenie",
              price: '20'
            },
            {
              name: "Večerné líčenie (svadobné)",
              price: '35'
            },
            {
              name: "Večerné líčenie (svadobné) + trsy",
              price: '40'
            },
            {
              name: "Permanentný MakeUp – púdrové obočie (vrátane korekcie)",
              price: '160'
            },
            {
              name: "Permanentný MakeUp – čiarkové obočie vláskovaním (vrátane korekcie)",
              price: '180'
            },
            {
              name: "Permanentný MakeUp – kombinovaná technika (vrátane korekcie)",
              price: '200'
            },
            {
              name: "Permanentný MakeUp – očné linky (vrátane korekcie)",
              price: '100'
            },
            {
              name: "Permanentný MakeUp – Microblading",
              price: '100'
            },
            {
              name: "Permanentný MakeUp – Korekcia",
              price: '20'
            },
            {
              name: "Permanentný MakeUp – Pery (plná výplň)",
              price: '150'
            },
          ]
        }
      },
      {
        id: 'kadernictvo',
        img: "kaderníctvo.png",
        title: "Kadernictvo",
        heading: "",

        desc: "Pripravujeme"
      },
      {
        id: 'pedikura',
        img: "pedikúra.png",
        title: "Pedikura",
        heading: "",
        desc: "Pripravujeme"
      }
    ],

    partnersSection: {
      heading: "Partneri, s ktorými spolupracujeme",
      partners: [
        {
          imgName: "logo-elissa-beaute.png",
          name: "alissa beauté",
          link: "www.google.com"
        },
        {
          imgName: "logo-essente.png",
          name: "essente | inspirace",
          link: "www.google.com"
        },
        {
          imgName: "logo-orly.png",
          name: "ORLY",
          link: "www.google.com"
        }
      ]
    },

    contactSection: {
      heading: "Napíšte nám"
    },

    footerSection: {
      cols: [
        {
          heading: "Sitemap",
        },
        {
          heading: "Služby",
          links: [
            {
              link: '#nechty',
              name: "Nechty",
            },
            {
              link: '#kozmetika',
              name: "Kozmetika",
            },
            {
              link: '#make-up',
              name: "Make Up",
            },
            {
              link: '#kadernictvo',
              name: "Kadernictvo",
            },
            {
              link: '#pedikura',
              name: "Pedikura",
            }
          ]
        },
        {
          heading: "Kontakt",
          address: {
            rows: [
              "Bratislavská 3, 851 20",
              "Bratislava, Slovensko",
              "info@kardelis.sk",
              "+421 910 566 233"
            ],

          }
        },
        {
          heading: "Osobné údaje",
          links: [
            {
              name: "Ochrana osobných údajov",
              slug: '/gdpr'
            },
            {
              name: "Zmluvné podmienky",
              slug: "/terms-and-services"
            },
            {
              name: "Cookies",
              slug: "/cookies"
            }
          ]
        }
      ]
    }
  },
  plugins: [
    `gatsby-transformer-ffmpeg`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
