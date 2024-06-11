// initialise map variable
// putting it outside of the main function gives us access from browser development tools
var map;
function initMap() {
var osm;
var myview;
// Create a Tile layer getting tiles from OpenStreetMap source
osm = new ol.layer.Tile(
{
source: new ol.source.OSM(),
}
);
// Create a view
myview = new ol.View(
{
center: ol.proj.fromLonLat([-2.99, 51.59], "EPSG:3857"),
zoom: 12
}
);
// Create a map
map = new ol.Map(
{
target: 'mymap',
layers:[osm],
view: myview
}
);
}