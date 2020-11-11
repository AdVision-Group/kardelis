require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  pathPrefix: `/kardelis`,
  siteMetadata: {
    title: `Karkdelis`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,

    partnersSection: {
      heading: "Partneri, s ktorými spolupracujeme",
      partners: [
        {
          imgName: "logo-elissa-beaute.png",
          name: "alissa beauté",
          link: "https://www.google.com"
        },
        {
          imgName: "logo-essente.png",
          name: "essente | inspirace",
          link: "https://www.google.com"
        },
        {
          imgName: "logo-orly.png",
          name: "ORLY",
          link: "https://www.google.com"
        }
      ]
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
              name: "Kaderníctvo",
            },
            {
              link: '#pedikura',
              name: "Pedikúra",
            }
          ]
        },
        {
          heading: "Kontakt",
          address: {
            rows: [
              "Bratislavská 13, 900 21",
              "Svätý Jur, Slovensko",
              "info@kardelisstudio.sk",
              "+421 917 306 169"
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
