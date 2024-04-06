import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const defaultCenter = { lat: 22.76088134311551, lng: 75.87109681828888 };
const defaultZoom = 20;

export const MapComponent = ({ apiKey }: { apiKey: string }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "300px" }}
        center={defaultCenter}
        zoom={defaultZoom}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};
