// initialise map variable
// putting it outside of the main function gives us access from browser development tools

var map;
function initMap() {
var osm;
var myview;
var un_cultural_wms;
var un_nmareas_wms;
var un_cultural_wfs;
var un_nmareas_wfs;
// Create a Tile layer getting tiles from OpenStreetMap source
osm = new ol.layer.Tile(
{
preload: Infinity,
source: new ol.source.OSM(),
title: 'Open Street Map',
type: 'base'
}
);
// Create a WMS layer
un_cultural_wms = new ol.layer.Tile(
{
source: new ol.source.TileWMS(
{
url: 'http://localhost:8080/geoserver/egm715/wms',
params: {'LAYERS': 'egm715:unesco_cultural'},
}
),
opacity: 0.7,
title: 'UNESCO Sites - cultural (WMS)',
visible: false
}
);
// Create a WMS layer
un_nmareas_wms = new ol.layer.Tile(
{
source: new ol.source.TileWMS(
{
url: 'http://localhost:8080/geoserver/egm715/wms',
params: {'LAYERS': 'egm715:unesco_nm_areas'},
}
),
opacity: 0.7,
title: 'UNESCO Sites - natural areas (WMS)',
visible: false
}
);
// Create a WFS layer
un_cultural_wfs = new ol.layer.Vector(
{
source: new ol.source.Vector(
{
format: new ol.format.GeoJSON(),
url: 'http://localhost:8080/geoserver/egm715/wfs?service=WFS&' +
'version=1.1.0&request=GetFeature&typename=egm715:unesco_cultural&' +
'outputFormat=application/json&srsname=EPSG:3857'
}
),
title: 'UNESCO Sites - cultural (WFS)',
visible: false
}
);
// Create a WFS layer
un_nmareas_wfs = new ol.layer.Vector(
{
source: new ol.source.Vector(
{
format: new ol.format.GeoJSON(),
url: function(extent) {
return 'http://localhost:8080/geoserver/egm715/wfs?service=WFS&' +
'version=1.1.0&request=GetFeature&typename=egm715:unesco_nm_areas&'
+
'outputFormat=application/json&srsname=EPSG:3857&' +
'bbox=' + extent.join(',') + ',EPSG:3857';
},
strategy: ol.loadingstrategy.bbox
}
),
title: 'UNESCO Sites - natural areas (WFS)',
visible: false
}
);
// Create a view centered on Australia
myview = new ol.View(
{
center: ol.proj.fromLonLat([134, -25], "EPSG:3857"),
zoom: 4,
projection: 'EPSG:3857'
}
);
// Create a map
map = new ol.Map(
{
target: 'mymap',
layers:[osm, un_cultural_wms, un_nmareas_wms, un_cultural_wfs,
un_nmareas_wfs],
view: myview,
controls:[
new ol.control.Zoom(),
new ol.control.ZoomSlider(),
new ol.control.ScaleLine(),
new ol.control.LayerSwitcher()
]
}
);
}