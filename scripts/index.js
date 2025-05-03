// Coordinates
const indonesiaCoor = [-2.548926, 118.0148634];
const jakartaCoor = [-6.2088, 106.8456];

// Initialize map
const myMap = L.map("map", {
  zoom: 5,
  center: indonesiaCoor, //coordinate
});

// Set base map
const rasterTileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const baseTile = L.tileLayer(rasterTileUrl, {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
baseTile.addTo(myMap);

// Marker
// const jakartaMarker = L.marker(jakartaCoor); //default
const jakartaMarker = L.marker(jakartaCoor, {
  title: "Jakarta",
  alt: "Jakarta, capital city of Indonesia",
  icon: L.icon({
    iconUrl: "images/custom-marker-icons/leaf-green.png",
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    shadowUrl: "images/custom-marker-icons/leaf-shadow.png",
    shadowSize: [50, 64],
    shadowAnchor: [4, 62],
    popupAnchor: [-2, -76],
  }),
  draggable: true, //can drag it
  // opacity: 0.5, //opacity
  // zIndex: 100, //z index
  // autoPan: true, //auto pan when zooming in
  // autoPanPadding: [10, 10], //padding when auto pan
  // autoPanPaddingTopLeft: [10, 10], //top left padding
  // autoPanPaddingBottomRight: [10, 10], //bottom right padding
  // autoPanSpeed: 100, //speed when auto pan
  // rotation: 45
}); //custom icon
jakartaMarker.addTo(myMap);

// make popup from marker with click
jakartaMarker.bindPopup("<b>Jakarta</b><br>Ibu kota Indonesia."); //must click it!
jakartaMarker.openPopup(); //auto open

// make popup from marker with tooltip
// jakartaMarker.bindTooltip("<b>Jakarta</b><br>Ibu kota Indonesia."); //must hover it!
// jakartaMarker.openTooltip(); //auto

/// Dealing with events
const myNewPopup = L.popup();

myMap.on("click", (event) => {
  console.log(event);
  myNewPopup.setLatLng(event.latlng);
  myNewPopup.setContent(`You clicked the map at ${event.latlng.toString()}`);
  myNewPopup.openOn(myMap);
});

jakartaMarker.addEventListener("move", (event) => {
  console.log(event);
  const position = event.target.getLatLng();
  event.target.bindPopup(position.toString()).openPopup();
});

// Somewhere for changing marker location which will trigger event
jakartaMarker.setLatLng([-6.1783, 106.6319]);
