import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

//import sections
import HeroSection from '../sections/heroSection/heroSection'
import ServicesSection from '../sections/servicesSection/servicesSection'
import PartnersSection from '../sections/partnersSection/partnersSection'
import ContactSection from '../sections/contactSection/contactSection'
import MapSection from '../sections/mapSection/mapSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroSection />
    <ServicesSection />
    <PartnersSection />
    <ContactSection />
    <MapSection />

  </Layout>
)

export default IndexPage
