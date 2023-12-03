import React, {useEffect} from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
    const zoomLevel = 18; // Set your desired zoom level here
    const centerCoordinates = [39.2141034,-76.8792424];
    const maxZoom = 18;
    const minZoom = 17;

    const MapBounds: React.FC = () => {
        const map = useMap();

        useEffect(() => {
            const bounds = [
                [centerCoordinates[0] - 0.01, centerCoordinates[1] - 0.01], // southwest corner -, -
                [centerCoordinates[0] + 0.01, centerCoordinates[1] + 0.01]  // northeast corner +, +
            ];
            map.setMaxBounds(bounds);
        }, [map]);

        return null;
    };

    // Set your desired center coordinates here

    // @ts-ignore
    let mapContainer = <><MapContainer center={centerCoordinates}
                                       zoom={zoomLevel}
                                       maxZoom={maxZoom}
                                       minZoom={minZoom}
                                       style={{height: "100vh", width: "100%"}}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapBounds/>
    </MapContainer></>;
    return mapContainer;
};

export default MapComponent;