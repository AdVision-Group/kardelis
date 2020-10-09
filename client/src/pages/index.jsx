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

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Domov" />

      <HeroSection data={data.site.siteMetadata.heroSection} />
      <ServicesSection data={data.site.siteMetadata.services} wave={data.allImageSharp.nodes[0].fluid} />
      <PartnersSection data={data.site.siteMetadata.partnersSection} wave={data.allImageSharp.nodes[0].fluid} />
      <SliderSection />
      <ContactSection data={data.site.siteMetadata.contactSection} wave={data.allImageSharp.nodes[0].fluid} />
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
      contactSection {
        heading
      }
      partnersSection {
        heading
        partners {
          link
          name
          imgName
        }
      }
      header {
        nav {
          slug
        }
      }
    }
  }
  allImageSharp(filter: {fluid: {originalName: {eq: "vlnka.png"}}}) {
    nodes {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}



`
export default IndexPage
