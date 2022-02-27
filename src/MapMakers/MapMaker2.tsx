import { useState, useEffect, useRef, ReactElement } from "react";
import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <ErrorComponent />;
  return <Spinner />;
};

const MapMaker2 = () => (
  <Wrapper apiKey={"AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"} render={render}>
    <MyMapComponent />
  </Wrapper>
);

function ErrorComponent() {
  return <p></p>;
}

function Spinner() {
  return <p></p>;
}

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

export default MapMaker2;
