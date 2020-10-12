import React from 'react';
import GoogleMapReact from 'google-map-react';

import { markerStyles, pulseStyles } from './mapSection.module.scss'

const isClient = typeof window !== 'undefined';

const MapSection = () => {
    const googleMapsApiKey = process.env.GOOGLE_MAP_API_KEY
    const lat = parseFloat(50.044060);
    const lng = parseFloat(14.516790);
    return (
        <section style={{ height: "60vh" }}>
            {isClient && (
                <GoogleMapReact
                    bootstrapURLKeys={{ key: googleMapsApiKey }}
                    defaultCenter={[lat, lng]}
                    defaultZoom={14}
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