import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const MapSection = () => {
    const position = [50.044060, 14.516790]

    if (typeof window !== 'undefined') {
        return (
            <section style={{ width: "100%", height: "60vh" }}>
                <Map style={{ height: "100%" }} center={position} zoom={18}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </Marker>
                </Map>
            </section>
        )
    }
    return null
}

export default MapSection
