import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

//import sections
import HeroSection from '../sections/heroSection/heroSection'
import ServicesSection from '../sections/servicesSection/servicesSection'
import PartnersSection from '../sections/partnersSection/partnersSection'
import SliderSection from '../sections/sliderSection/sliderSection'
import ContactSection from '../sections/contactSection/contactSection'
import MapSection from '../sections/mapSection/mapSection'

//Providers
import ContactProvider from '../contexts/contact/contact.context'
import ServicesProvider from '../contexts/services/services.context'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Domov" />

      <HeroSection data={data.site.siteMetadata.heroSection} />

      <ServicesProvider>
        <ServicesSection />
      </ServicesProvider>

      <PartnersSection data={data.site.siteMetadata.partnersSection} />
      <SliderSection />

      <ContactProvider>
        <ContactSection />
      </ContactProvider>

      <MapSection />

    </Layout>
  )
}

export const query = graphql`
{
  site {
    siteMetadata {

      partnersSection {
        heading
        partners {
          link
          name
          imgName
        }
      }
    }
  }
}



`
export default IndexPage
