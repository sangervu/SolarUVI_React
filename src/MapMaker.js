import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 60.20,
  lng: 24.9
};

function MapMaker() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapMaker)


//https://developers.google.com/maps/documentation/javascript/react-map

//https://codesandbox.io/s/n9lrxw0670?file=/src/Map.js