import React, { useContext } from 'react';
import { MapContext } from '../../contexts/map/map.context'
import GoogleMapReact from 'google-map-react';

import { markerStyles, pulseStyles } from './mapSection.module.scss'

const isClient = typeof window !== 'undefined';

const MapSection = () => {
    const { position: { lat, lng }, defaultZoom } = useContext(MapContext)

    return (
        <section style={{ height: "60vh" }}>
            {isClient && (
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.GOOGLE_MAP_API_KEY
                    }}
                    defaultCenter={[lat, lng]}
                    defaultZoom={defaultZoom}
                >
                    <div
                        className={markerStyles}
                        lat={lat}
                        lng={lng}
                    >

                        <div className={pulseStyles} />
                    </div>
                </GoogleMapReact>
            )}
        </section>
    );
}

export default MapSection