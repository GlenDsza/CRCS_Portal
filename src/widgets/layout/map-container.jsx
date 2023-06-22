import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";

export const MapContainer = ({ currentPosition, name, stateCords }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GMAPS_API,
  });
  const mapStyles = {
    height: "100%",
    width: "100%",
    borderRadius: "15px",
  };
  return isLoaded ? (
    <div className="h-full w-full">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={6}
        center={currentPosition}
      >
        <MarkerF position={currentPosition} animation={2} clickable={false} />
        <InfoWindow
          position={{ lat: currentPosition.lat, lng: currentPosition.lng }}
          clickable={true}
          className="ml-10 px-2 py-2"
        >
          <p>{name}</p>
        </InfoWindow>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapContainer;
