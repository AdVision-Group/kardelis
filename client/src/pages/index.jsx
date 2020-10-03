import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

//import sections
import HeroSection from '../sections/heroSection/heroSection'
import ServicesSection from '../sections/servicesSection/servicesSection'
import PartnersSection from '../sections/partnersSection/partnersSection'
import ContactSection from '../sections/contactSection/contactSection'
import MapSection from '../sections/mapSection/mapSection'

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Domov" />

      <HeroSection data={data.site.siteMetadata.heroSection} />
      <ServicesSection data={data.site.siteMetadata.services} />
      <PartnersSection data={data.site.siteMetadata.partners} />
      <ContactSection data={data.site.siteMetadata.contactSection} />
      <MapSection />

    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        heroSection {
          heading
          social {
            link
            name
          }
        }
        services {
          heading
          content
        }
        partners {
          name
          link
        }
        contactSection {
          heading
        }
      }
    }
  }
`
export default IndexPage
