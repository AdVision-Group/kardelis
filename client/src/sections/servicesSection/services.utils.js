
export const getServices = (services, servicesData) => {
    const images = servicesData.images.nodes
    const servicesWithImages = services.map((service) => {
    const img = images.filter(image => {
      return service.img === image.childImageSharp.fluid.originalName
    })

    if (service.id === 'nechty') {
      return {
        fluid: img[0].childImageSharp.fluid,
        references: servicesData.nechtyImages.nodes.map((img, idx) => {
          return {
            key: idx,
            ...img
          }
        }),
        pricing: true,

        ...service
      }
    }
    if (service.id === 'kozmetika') {
      return {
        fluid: img[0].childImageSharp.fluid,
        references: servicesData.kozmetikaImages.nodes.map((img, idx) => {
          return {
            key: idx,
            ...img
          }
        }),
        pricing: true,

        ...service
      }
    }
    if (service.id === 'make-up') {
      return {
        fluid: img[0].childImageSharp.fluid,
        references: servicesData.makeupImages.nodes.map((img, idx) => {
          return {
            key: idx,
            ...img
          }
        }),
        pricing: true,

        ...service
      }
    }

    return {
      fluid: img[0].childImageSharp.fluid,
      references: [],
      pricing: false,
      ...service
    }
  })

  return servicesWithImages
  }
