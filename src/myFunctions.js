
// import uviWarnings from './common/uviWarnings';
// import northSouthEastWest from './common/northSouthEastWest';
import solarCalculations from './calculations/solarCalculations';
import solarPositions from './calculations/solarPositions';
// import calendar from './common/calendar';

function myFunctions() {

    let pos = new solarPositions();
    let sol = new solarCalculations(pos);

    const myResults = {
        currentSunElevation: pos.solarPositionLocal.currentSunElevation,
        maxSunElevation: pos.solarPositionLocal.maxSunElevation,
        currentSunAzimuth: pos.solarPositionLocal.currentSunAzimuth,
        azimuthNSEW: northSouthEastWest(pos.solarPositionLocal.currentSunAzimuth),
        uvIndex: sol.solarCalculations.uvIndex,
        uvIndexMax: sol.solarCalculations.uvIndexMax,
        uvIndexOverThree: sol.solarCalculations.uvIndexOverThree,
        uvIndexEnd: sol.solarCalculations.uvIndexEnd,
        uvIndexMaxAnnual: sol.solarCalculations.uvIndexMaxAnnual,
        uvIndexWarning: uviWarning(sol.solarCalculations.uvIndex),
        solarPower: sol.solarCalculations.solarPower,
        solarPowerMax: sol.solarCalculations.solarPowerMax,
        solarPowerMaxAnnual: sol.solarCalculations.solarPowerMaxAnnual,
        solarPowerAquired: sol.solarCalculations.solarPowerMaxAnnual,
        timeRize: pos.solarPositionLocal.timeRize,
        timeSunSouth: pos.solarPositionLocal.timeSunSouth,
        timeSet: pos.solarPositionLocal.timeSet,
        timeSetCivil: pos.solarPositionLocal.timeSetCivil,
        timeSetNautical: pos.solarPositionLocal.timeSetNautical,
        timeSetAstronomical: pos.solarPositionLocal.timeSetAstronomical,
        timeRizeCivil: pos.solarPositionLocal.timeRizeCivil,
        timeRizeNautical: pos.solarPositionLocal.timeRizeNautical,
        timeRizeAstronomical: pos.solarPositionLocal.timeRizeAstronomical,
        latitudePolarNight: pos.solarPositionLocal.latitudePolarNight,
        dayLength: pos.solarPositionLocal.dayLength
    };
    this.myResults = myResults;

    function northSouthEastWest(atsimuutti) {
        let suunta = " ";
        if ((atsimuutti >= (180. - 11.25)) && (atsimuutti < (180. + 11.25))) {
            suunta = suunta + "S";
        }
        else if ((atsimuutti >= (157.5 - 11.25)) && (atsimuutti < (157.5 + 11.25))) {
            suunta = suunta + "SSE";
        }
        else if ((atsimuutti >= (135 - 11.25)) && (atsimuutti < (135 + 11.25))) {
            suunta = suunta + "SE";
        }
        else if ((atsimuutti >= (112.5 - 11.25)) && (atsimuutti < (112.5 + 11.25))) {
            suunta = suunta + "ESE";
        }
        else if ((atsimuutti >= (90 - 11.25)) && (atsimuutti < (90 + 11.25))) {
            suunta = suunta + "E";
        }
        else if ((atsimuutti >= (67.5 - 11.25)) && (atsimuutti < (67.5 + 11.25))) {
            suunta = suunta + "ENE";
        }
        else if ((atsimuutti >= (45 - 11.25)) && (atsimuutti < (45 + 11.25))) {
            suunta = suunta + "NE";
        }
        else if ((atsimuutti >= (22.5 - 11.25)) && (atsimuutti < (22.5 + 11.25))) {
            suunta = suunta + "NNE";
        }
        else if ((atsimuutti >= (360 - 11.25)) || (atsimuutti < 11.25)) {
            suunta = suunta + "N";
        }
        else if ((atsimuutti >= (337.5 - 11.25)) && (atsimuutti < (337.5 + 11.25))) {
            suunta = suunta + "NNW";
        }
        else if ((atsimuutti >= (315 - 11.25)) && (atsimuutti < (315 + 11.25))) {
            suunta = suunta + "NW";
        }
        else if ((atsimuutti >= (292.5 - 11.25)) && (atsimuutti < (292.5 + 11.25))) {
            suunta = suunta + "WNW";
        }
        else if ((atsimuutti >= (270 - 11.25)) && (atsimuutti < (270 + 11.25))) {
            suunta = suunta + "W";
        }
        else if ((atsimuutti >= (247.5 - 11.25)) && (atsimuutti < (247.5 + 11.25))) {
            suunta = suunta + "WSW";
        }
        else if ((atsimuutti >= (225 - 11.25)) && (atsimuutti < (225 + 11.25))) {
            suunta = suunta + "SW";
        }
        else if ((atsimuutti >= (202.5 - 11.25)) && (atsimuutti < (202.5 + 11.25))) {
            suunta = suunta + "SSW";
        }
        return suunta;
    }

    function uviWarning(uvIndex) {
        // varoitustekstit UVI säteilyn intensiteetin mukaan
        if (uvIndex >= 10) {
            setUviWarning("PYSY POIS AURINGOSTA!", "rgb(153,140,255)", "Black");
        }
        if (uvIndex < 10 && uvIndex >= 9.0) {
            setUviWarning("PYSY POIS AURINGOSTA!", "rgb(181,76,255)", "Black");
        }
        if (uvIndex >= 8.0 && uvIndex < 9.0) {
            setUviWarning("PYSY POIS AURINGOSTA!", "rgb(255,0,153)", "Black");
        }
        if (uvIndex >= 7.0 && uvIndex < 8.0) {
            setUviWarning("MAX 5 min AURINGOSSA!", "rgb(216,0,29)", "Red");
        }
        if (uvIndex >= 6.0 && uvIndex < 7.0) {
            setUviWarning("MAX 15 min AURINGOSSA!", "rgb(232,44,14)", "Red");
        }
        if (uvIndex >= 5.0 && uvIndex < 6.0) {
            setUviWarning("Varo UV säteilyä!", "rgb(248,89,0)", "Black");
        }
        if (uvIndex >= 4.0 & uvIndex < 5.0) {
            setUviWarning("Suuri riski UV säteilystä", "rgb(248,135,0)", "Brown");
        }
        if (uvIndex >= 3.0 && uvIndex < 4.0) {
            setUviWarning("Riski UV säteilystä", "rgb(248,182,0)", "Black");
        }
        if (uvIndex >= 2.0 && uvIndex < 3.0) {
            setUviWarning("Pieni riski UV säteilystä", "rgb(160,206,0)", "Gold");
        }
        if (uvIndex >= 1.0 && uvIndex < 2.0) {
            setUviWarning("Vähäinen riski UV säteilystä", "rgb(78,180,0)", "Cyan");
        }
        if (uvIndex >= 0 && uvIndex < 1.0) {
            setUviWarning("Ei vaaraa UV säteilystä", "rgb(190,190,190)", "Blue");
        
        }
        return uviWarning;
    }

    function setUviWarning(text, color, fontColor) {
        const uviWarning = {
            backgroundColor: color,
            value: text,
            color: fontColor
        }
        return uviWarning;
    };
};

export default myFunctions;
