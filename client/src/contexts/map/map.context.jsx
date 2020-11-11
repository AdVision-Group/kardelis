import React, { createContext } from 'react'

export const MapContext = createContext({
    position: {
        lat: 0,
        lng: 0
    },
    defaultZoom: 0
})

const MapProvider = ({ children }) => {
    const position = {
        lat: parseFloat(48.250190),
        lng: parseFloat(17.211940)
    }
    const defaultZoom = 14;

    return (
        <MapContext.Provider
            value={{
                position,
                defaultZoom
            }}
        >
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider