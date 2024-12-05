// Initialize map
var map = L.map('map').setView([-3.7889, 102.2655], 12);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON data (sample data)
var geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Banjir - Kecamatan Ratu Agung",
                "description": "Ketinggian air mencapai 1 meter."
            },
            "geometry": {
                "type": "Point",
                "coordinates": [102.2682, -3.7887]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Longsor - Kecamatan Selebar",
                "description": "Material longsor menutup jalan utama."
            },
            "geometry": {
                "type": "Point",
                "coordinates": [102.2455, -3.8085]
            }
        }
    ]
};

// Add GeoJSON layer to the map
L.geoJSON(geojsonData, {
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(`<b>${feature.properties.name}</b><br>${feature.properties.description}`);
        }
    }
}).addTo(map);
