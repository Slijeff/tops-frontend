import {useMap} from "react-leaflet";
import {Coordinate} from "./Map";
import React from "react";

const SetViewOnChange:React.FC<Coordinate> = ({lon, lat}) => {
    const map = useMap()
    map.setView([lon, lat], map.getZoom())
    return null
}

export default SetViewOnChange