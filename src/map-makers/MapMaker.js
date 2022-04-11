import React from 'react'
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 60.20,
  lng: 24.9
};

function MapMaker(props) {
  const [inputs, setInputs] = useState({
    lat: '60.20',
    lon: '24.90'
  });

  const [tz, setTimeZone] = useState({
    dstOffset: 0,
    rawOffset: -28800,
    status: "OK",
    timeZoneId: "America/Los_Angeles",
    timeZoneName: "Pacific Standard Time",
  });

  function handleChange() {
    props.handleMap(inputs);
  }

  useEffect(() => {
    handleChange();
    setTimeZone({
      dstOffset: 0,
      rawOffset: -28800,
      status: "NOK",
      timeZoneId: "asdsd",
      timeZoneName: "sdfa"
    })
  }, [inputs])


  return (
    <LoadScript googleMapsApiKey="AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec">
      <GoogleMap
        onClick={ev => {
          setInputs({
            lat: ev.latLng.lat(),
            lon: ev.latLng.lng()
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