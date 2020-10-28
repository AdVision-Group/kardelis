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
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus. Elit ut aliquam purus sit amet luctus venenatis. Pellentesque habitant morbi tristique senectus et. Augue ut lectus arcu bibendum at varius. Leo a diam"
      },
      {
        id: 'kozmetika',
        img: "kozmetika.png",
        title: "Kozmetika",
        desc: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
      },
      {
        id: 'make-up',
        img: "make-up.png",
        title: "Make Up",
        desc: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jï¿½cama salsify."
      },
      {
        id: 'kadernictvo',
        img: "kaderníctvo.png",
        title: "Kadernictvo",
        desc: "Pripravujeme"
      },
      {
        id: 'pedikura',
        img: "pedikúra.png",
        title: "Pedikura",
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
