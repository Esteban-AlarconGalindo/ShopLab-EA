var map = L.map('map').setView([4.628562162863909, -74.0647138786652], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.628562162863909, -74.0647138786652]).addTo(map);

var circle = L.circle([4.628562162863909, -74.0647138786652
    
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);