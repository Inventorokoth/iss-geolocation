const mymap=L.map('map').setView([0, 0], 3);
var myIcon = L.icon({
    iconUrl: 'location.png',
    iconSize: [38, 50],
    iconAnchor: [25, 16],
    // popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});
// //latitude: 
// ​​
// //longitude: 
const marker=L.marker([0, 0], {icon: myIcon}).addTo(mymap);
// const marker=  L.marker([ 0,0]).addTo(mymap);
const attribution=' &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
tileUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles=L.tileLayer(tileUrl,{attribution});
tiles.addTo(mymap);
 marker.setLatLng([-1.482170,36.950874]);