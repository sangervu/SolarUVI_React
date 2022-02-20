import InputLocation from './InputLocation';
function proxyFolder(loc) {

    let location = {
        longitude: 24.90,
        latitude: 60.20,

        setLongitude(lon) {
            this.longitude = lon;
        },
        setLatitude(lat) {
            this.latitude = lat;
        }
    }

    location.setLongitude(loc.longitude);
    location.setLatitude(loc.latitude);
}
export default proxyFolder;