import React, { createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const ServicesContext = createContext({
    services: [],
    wave: null
})

const ServiceProvider = ({ children }) => {
    const servicesData = useStaticQuery(graphql`
        query{
            images: allFile(filter: {relativeDirectory: {eq: "services"}}) {
            nodes {
                childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                }
                }
            }
            }
            nechtyImages: allFile(filter: {relativeDirectory: {eq: "nechty"}}) {
                nodes {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
                }
            }
            makeupImages: allFile(filter: {relativeDirectory: {eq: "makeup"}}) {
            nodes {
                childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
            }
            }
            kozmetikaImages: allFile(filter: {relativeDirectory: {eq: "kozmetika"}}) {
            nodes {
                childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
            }
            } 

            vlnkaImage: allImageSharp(filter: {fluid: {originalName: {eq: "vlnka.png"}}}) {
                nodes {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
  }
        }
  `)

    const wave = servicesData.vlnkaImage.nodes[0].fluid


    const services = [
        {
            id: 'nechty',
            img: servicesData.images.nodes.find(img => img.childImageSharp.fluid.originalName === "nechty.png"),
            title: "Manikúra",
            heading: "Manikúra",
            desc: `Zverte svoje ruky do rúk odborníkov, či už klasická manikúra, lakovanie, gélové či akrylové nechty a gél-lak. Obrovský výber farieb, kvalitný materiál a profesionálny prístup Vám zaručí, že Vaše nechty môžu vyzerať dokonale až po dobu štyroch týždňov. Radi Vás privítame, prídite sa k nám presvedčiť.`,
            references: servicesData.nechtyImages.nodes,
            pricing: {
                title: "Manikúra",
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
                        price: "10"
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
                        name: 'Gelové/akrylové nechty – špeciálne zdobenie',
                        price: "5-10"
                    },
                    {
                        name: 'Vytvrdenie prírodných nechtov gélom',
                        price: "25"
                    },
                    {
                        name: 'Odstránenie gélových/akrylových nechtov',
                        price: "15"
                    },
                ]
            }
        },
        {
            id: 'kozmetika',
            img: servicesData.images.nodes.find(img => img.childImageSharp.fluid.originalName === "kozmetika.png"),
            title: "Kozmetika",
            heading: "Kozmetika",
            desc: `Buďte náročná, jedinečná, krásna a vzácna tak ako naša pokožka. Ponúkame Vám prístrojové kozmetické ošetrenia šité na mieru s Exkluzívne registrovanou obchodnou značkou DIEGO DALLA PALMA, ktorá v sebe spája typický taliansky pôvab a spoľahlivosť vedeckého výskumu. Profesionálny prístup, relax, príjemná atmosféra, únik s každodenného stereotypu - to všetko a omnoho viac Vás čaká v príjemnom prostredí nášho štúdia. Doprajte si pocit jedinečnosti práve u Nás.`,
            references: servicesData.kozmetikaImages.nodes,

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
                        name: "Masáž tváre, krku a dekoltu",
                        price: "13"
                    },
                    {
                        name: "Masáž tváre, krku a dekoltu (predĺžená)",
                        price: "20"
                    },
                    {
                        name: "Kompletné ošetrenie pleti + /rádiofrekvencia/",
                        price: "50"
                    },
                    {
                        name: "Kompletné ošetrenie pleti + /rádiofrekvencia,masáž/",
                        price: "55"
                    },
                    {
                        name: "Hydropeel (čistenie vodou)",
                        price: "38"
                    },
                    {
                        name: "Diamantová mikrodermabrázia",
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
            img: servicesData.images.nodes.find(img => img.childImageSharp.fluid.originalName === "make-up.png"),
            title: "Make Up",
            heading: "Permanentný Make-up (Pmu)",
            desc: `Je skvelou pomôckou hlavne pre tie z Vás, ktoré už nebaví každodenné líčenie či už obočia, liniek alebo pier. Pri profesionálnom prevedení šetrí čas a zvýrazní pekné črty tvare. Dnes už je v ponuke nielen možnosť výberu vysokokvalitných pigmentov ,ale rovnako tak aj možnosť výberu v technike Pmu. Napríklad microblading s 3D efektom, ktoré reálne napodobňuje chĺpky obočia, alebo púdrové či podtieňované obočie, poprípade kombinovaná technika.
Zverte sa do rúk profesionálov a zobúdzajte sa každé ráno dokonale upravená.`,
            references: servicesData.makeupImages.nodes,
            pricing: {
                title: "Vizáž",
                additional: "Tetovanie - Cena záleží od konečného motívu, veľkosti, náročnosti, farebnosti. Základná cena u nás je od 40€.",
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
            img: servicesData.images.nodes.find(img => img.childImageSharp.fluid.originalName === "kaderníctvo.png"),
            title: "Kaderníctvo",
            heading: "",
            desc: "Pripravujeme"
        },
        {
            id: 'pedikura',
            img: servicesData.images.nodes.find(img => img.childImageSharp.fluid.originalName === "pedikúra.png"),
            title: "Pedikúra",
            heading: "",
            desc: "Pripravujeme"
        }
    ]

    return (
        <ServicesContext.Provider value={{
            services,
            wave
        }}>
            {children}
        </ServicesContext.Provider>
    )
}

export default ServiceProvider