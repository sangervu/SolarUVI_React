function location() {

  let location = {
    longitude: 24.90,
    latitude: 60.20,

    setLongitude(lon) {
      this.longitude = Number(lon);
    },
    setLatitude(lat) {
      this.latitude = Number(lat);
    }
  }

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     document.getElementById("demo24").innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // };

  // const showPosition = position => {
  //   const mapLink = document.querySelector('#map-link');
  //   location.setLatitude(position.coords.latitude);
  //   location.setLongitude(position.coords.longitude);
  //   //myFunctions();
  //   document.getElementById("demo24").innerHTML = "Latitude: " + position.coords.latitude +
  //     "<br>Longitude: " + position.coords.longitude;
  //   mapLink.href = `https://www.openstreetmap.org/#map=18/${location.latitude}/${location.longitude}`;
  //   mapLink.textContent = `Latitude: ${location.latitude} °, Longitude: ${location.longitude} °`;
  // };

  // const newLocation = () => {

  //   const mapLink = document.querySelector('#map-link');
  //   var x = parseFloat(document.getElementById("lat").value);
  //   var y = parseFloat(document.getElementById("lon").value);

  //   location.setLatitude(x);
  //   location.setLongitude(y);
  //   // myFunctions();

  //   document.getElementById("demo24").innerHTML = "Latitude: " + x +
  //     "<br>Longitude: " + y;

  //   mapLink.href = `https://www.openstreetmap.org/#map=18/${location.latitude}/${location.longitude}`;
  //   mapLink.textContent = `Latitude: ${location.latitude} °, Longitude: ${location.longitude} °`;
  // };
}

export default location;