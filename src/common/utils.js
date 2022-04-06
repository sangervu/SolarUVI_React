const MathNew = {
    // degrees to radians
    deg2rad: (deg) => deg * (Math.PI) / 180,
    // radians to degrees
    rad2deg: (rad) => rad * 180 / (Math.PI),
    // degrees between [0,360]
    trueArcTan: (y, x) => {
        var alfa = y / x;
        alfa = Math.atan(alfa) * 180 / (Math.PI);
        //if (y >= 0 & x > 0)
        //alfa = y/x;
        if (y >= 0 & x < 0)
            alfa = alfa + 180;
        if (y < 0 & x > 0)
            alfa = alfa + 360;
        if (y < 0 & x < 0)
            alfa = alfa + 180;
        return alfa;
    },
    // round desimal to 1/10
    roundDesimal_1: (rnd) => {
        rnd = rnd * 10;
        rnd = Math.round(rnd);
        rnd = rnd / 10;
        return rnd;
    },
    // to hours
    timeHour: (timeValue) => {
        // hour value
        if (isNaN(timeValue)) {
            return "-";
        }
        var hourTime = Math.floor(timeValue);
        if (hourTime < 10) {
            return "0" + hourTime;
        } else {
            return hourTime;
        }
    },
    //to minutes
    timeMinute: (timeValue) => {
        // minute value
        if (isNaN(timeValue)) {
            return "-";
        }
        var minuteTime = Math.floor((timeValue - Math.floor(timeValue)) * 60);
        if (minuteTime < 10) {
            return "0" + minuteTime;
        } else {
            return minuteTime;
        }
    },
    // degrees between [0,360]
    minDegree: (degree) => {
        while (degree >= 360.)
            degree = degree - 360.;
        while (degree < 0.)
            degree = degree + 360.;
        return degree;
    },
    // hours between [0,24]
    minHour: (hour) => {
        while (hour >= 24)
            hour = hour - 24;
        while (hour < 0)
            hour = hour + 24;
        return hour;
    },
    // elevation between [-90,90]
    trueElevation: (trueDeg) => {
        while (trueDeg > 90)
            trueDeg = 180 - trueDeg;
        while (trueDeg < -90)
            trueDeg = 180 + trueDeg;
        return trueDeg;
    }
}

export { MathNew };