import React from 'react'
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

// const locations = [
//   {
//     name: "Koti Lauttasaaressa",
//     location: {
//       lat: 60.16308,
//       lng: 24.8869
//     },
//   },
//   {
//     name: "Rantaharju",
//     location: {
//       lat: 60.15812,
//       lng: 24.75455
//     },
//   },
//   {
//     name: "Karjalohja",
//     location: {
//       lat: 60.280,
//       lng: 23.8335
//     },
//   },
//   {
//     name: "Sääksjärvi",
//     location: {
//       lat: 61.3953,
//       lng: 22.37154
//     },
//   },
//   {
//     name: "Lentävänniemi",
//     location: {
//       lat: 61.53115,
//       lng: 23.72355
//     },
//   }
// ];

const center = {
  lat: 60.20,
  lng: 24.9
};

function MapMaker(props) {
  const [inputs, setInputs] = useState({
    lat: '60.20',
    lon: '24.90'
  });

  // const [selected, setSelected] = useState({});
  // const onSelect = item => {
  //   setSelected(item);
  // }


  function handleChange() {
    props.handleMap(inputs);
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
            lon: ev.latLng.lng()
          })
        }}
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