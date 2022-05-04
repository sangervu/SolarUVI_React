import React from 'react'
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useContext } from "react";
import MainContext from '../context/MainContext';

const containerStyle = {
  width: '400px',
  height: '400px',
  top: '30px'
};

function MapMaker() {

  const { mapCenter, mapToParent } = useContext(MainContext);

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
        zoom={10}
      >
        { }
        {
          // locations.map(item => {
          //   return (
          //     <Marker key={item.name}
          //       position={item.location}
          //       onClick={() => onSelect(item)}
          //     />
          //   )
          // })
        }

        {
          // selected.location &&
          // (
          //   <InfoWindow
          //     position={selected.location}
          //     clickable={true}
          //     onCloseClick={() => setSelected({})}
          //   >
          //     <p>{selected.name}</p>
          //   </InfoWindow>
          // )
        }

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapMaker)