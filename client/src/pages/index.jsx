import React from "react"

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
import PartnersProvider from '../contexts/partners/partners.context'
import MapProvider from '../contexts/map/map.context'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Domov" />

      <HeroSection />

      <ServicesProvider>
        <ServicesSection />
      </ServicesProvider>

      <PartnersProvider>
        <PartnersSection />
      </PartnersProvider>
      <SliderSection />

      <ContactProvider>
        <ContactSection />
      </ContactProvider>

      <MapProvider>
        <MapSection />
      </MapProvider>

    </Layout>
  )
}

export default IndexPage
