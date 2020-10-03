module.exports = {
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
          name: "O nás",
          slug: "#o-nas"
        },
        {
          name: "Služby",
          slug: "#sluzby"
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
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus. Elit ut aliquam purus sit amet luctus venenatis.",
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
        heading: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus. Elit ut aliquam purus sit amet luctus venenatis. Pellentesque habitant morbi tristique senectus et. Augue ut lectus arcu bibendum at varius. Leo a diam"
      },
      {
        heading: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus. Elit ut aliquam purus sit amet luctus venenatis. Pellentesque habitant morbi tristique senectus et. Augue ut lectus arcu bibendum at varius. Leo a diam"
      }
    ],

    partners: [
      {
        name: "alissa beauté",
        link: "www.google.com"
      },
      {
        name: "essente | inspirace",
        link: "www.google.com"
      },
      {
        name: "ORLY",
        link: "www.google.com"
      }
    ],

    sliderShowImages: [
      {
        name: "img_1",
      },
      {
        name: "img_2",
      },
      {
        name: "img_3",
      },
      {
        name: "img_4",
      },
      {
        name: "img_5",
      }
    ],

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
              name: "Lorem ipsum",
              link: "www.google.com"
            },
            {
              name: "Lorem ipsum",
              link: "www.google.com"
            },
            {
              name: "Lorem ipsum",
              link: "www.google.com"
            },
            {
              name: "Lorem ipsum",
              link: "www.google.com"
            },
            {
              name: "Lorem ipsum",
              link: "www.google.com"
            },
            {
              name: "Lorem ipsum",
              link: "www.google.com"
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
