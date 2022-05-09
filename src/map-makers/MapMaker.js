import React from 'react'
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useContext } from "react";
import MainContext from '../context/MainContext';

const containerStyle = {
  width: '100%',
  height: '100%',
  top: '5px'
};

function MapMaker() {

  const { mapCenter, mapZoom, mapToParent, location } = useContext(MainContext);

  const [center, setCenter] = useState({
    lat: 60.20,
    lng: 24.90
  });

  useEffect(() => {
    setCenter(mapCenter)
  }, [mapCenter]);

  const [inputs, setInputs] = useState({
    lat: '60.20',
    lon: '24.90',
    timezone: '3'
  });

  function handleChange() {
    mapToParent(inputs);
  }

  useEffect(() => {
    handleChange()
  }, [inputs])

  return (

    <LoadScript googleMapsApiKey="AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec">
      <GoogleMap
        onClick={ev => {
          setInputs({
            lat: ev.latLng.lat(),
            lon: ev.latLng.lng(),
            timezone: '3'
          })
        }
        }
        mapContainerStyle={containerStyle}
        center={center}
        zoom={mapZoom}
      >
        {true && <Marker position={{ lat: location.lat, lng: location.lon }} />}

        {}

        {}

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapMaker)