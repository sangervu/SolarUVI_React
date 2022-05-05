import React from 'react';
import { useState, useRef, useEffect } from 'react'
import MapMaker from '../map-makers/MapMaker';
import { SolarResultsUVI } from '../solar-results/SolarResultsUVI';
import { SolarResultsPower } from '../solar-results/SolarResultsPower';
import { SolarResultsSunSet } from '../solar-results/SolarResultsSunSet';
import { SolarResultsPosition } from '../solar-results/SolarResultsPosition';
import useTimeZone from '../hooks/useTimeZones';
import { useContext } from "react";
import MainContext from '../context/MainContext';

function Home() {

  const { date, location, navState } = useContext(MainContext);

  const [uviPanelFlexBasis, setUviPanelFlexBasis] = useState('20');
  const [powerPanelFlexBasis, setPowerPanelFlexBasis] = useState('20');
  const [sunsetPanelFlexBasis, setSunsetPanelFlexBasis] = useState('20');
  const [positionPanelFlexBasis, setPositionPanelFlexBasis] = useState('20');
  const [mapPanelFlexBasis, setMapPanelFlexBasis] = useState('20');
  const gutterSize = 32;

  const xDividerPos = useRef(null);
  const setWidthFunction = useRef(null);
  const currentLengthRef = useRef(null);
  const nextLengthRef = useRef(null);
  const setNextLengthRef = useRef(null);

  const SplitterType = {
    Uvi: 'uvi',
    Power: 'power',
    SunSet: 'sunset',
    Position: 'position',
    Map: 'map'
  }

  const onMouseDown = (e, splitterType) => {
    xDividerPos.current = e.clientX;
    var data = getSplitterData(splitterType);
    currentLengthRef.current = data.width;
    setWidthFunction.current = data.setFunction;
    // var nextSplitterData = getNextSplitterData(splitterType);
    // nextLengthRef.current = nextSplitterData.width;
    // setNextLengthRef.current = nextSplitterData.setFunction;
  }

  const emptyContent = navState.powerSelected + navState.sunsetSelected + navState.positionSelected + navState.uviSelected === 0;

  const getGutterVisiblity = (splitterType) => {
    if (splitterType === SplitterType.Uvi) {
      return 'block';
    }
    else {
      return 'none';
    }
  }

  const getSplitterData = (splitterType) => {
    let data = {
      width: 0,
      setFunction: null
    };

    if (splitterType === SplitterType.Map) {
      data.width = mapPanelFlexBasis;
      data.setFunction = setMapPanelFlexBasis;
    }
    return data;
  }

  const [dateState, setDate] = useState(new Date());

  useEffect(() => {
    setDate(date)
  }, [date]);

  useEffect(() => {
    setLocation(location)
  }, [location]);

  const [locState, setLocation] = useState({
    lat: '60.20',
    lon: '24.90',
    timezone: '3'
  });

  // const timeZone = useTimeZone("https://maps.googleapis.com/maps/api/timezone/json?location=60.6034810%2C23.6822510&timestamp=1331161200&key=AIzaSyC9JoYNE1TRoIwzEp-QB7-l5-eqSILgHmY");
  // const rawOffset = timeZone.rawOffset/60/60;

  useEffect(() => {
    childFunc1.current()
    childFunc2.current()
    childFunc3.current()
    childFunc4.current()
  }, [locState][dateState]);

  const childFunc1 = useRef(null);
  const childFunc2 = useRef(null);
  const childFunc3 = useRef(null);
  const childFunc4 = useRef(null);

  return (
    // <div style={{ display: emptyContent ? 'none' : 'block' }} className='home-container'>
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <div style={{ display: navState.uviSelected ? 'block' : 'none', flexBasis: `${uviPanelFlexBasis}%` }}>
        <SolarResultsUVI longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc1={childFunc1} />
      </div>
      <div style={{ display: navState.powerSelected ? 'block' : 'none', flexBasis: `${powerPanelFlexBasis}%` }}>
        <SolarResultsPower longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc2={childFunc2} />
      </div>
      <div style={{ display: navState.sunsetSelected ? 'block' : 'none', flexBasis: `${sunsetPanelFlexBasis}%` }}>
        <SolarResultsSunSet longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc3={childFunc3} />
      </div>
      <div style={{ display: navState.positionSelected ? 'block' : 'none', flexBasis: `${positionPanelFlexBasis}%` }}>
        <SolarResultsPosition longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc4={childFunc4} />
      </div>
      <div style={{ display: getGutterVisiblity(SplitterType.Uvi), flexBasis: gutterSize }} className='gutter gutter-horizontal' onMouseDown={(e) => onMouseDown(e, SplitterType.Map)}></div >
      <div style={{ display: 'block' }} className='map_col'>
        <MapMaker />
      </div>
    </div >
    // </div >
  );
}
export default Home;