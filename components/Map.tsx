import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import React from "react";

interface Coordinate {
    lon: number,
    lat: number
}

const Map: React.FC<Coordinate> = ({lon, lat}) => {
    // @ts-ignore
    return (
        <MapContainer center={[lon, lat]} zoom={18} scrollWheelZoom={false} style={{ height: "450px", width: "600px" }}>
            <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map