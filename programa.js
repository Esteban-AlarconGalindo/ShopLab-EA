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

//Abrir el archivo GeoJSON
//Javascript se ejecuta de tal manera que si una 
//linea de código se demora, se pasa a la siguiente sin esperar.
//Esto puede generar problemas cuando se requiere secuencialidad


async function cargarPuntos(){

    var miArchivo= await fetch("Microondas.geojson");


// Convertir el contenido a json: objeto js

    var datos =await miArchivo.json();

    let listaFeatures=datos["features"];

    console.log(datos);

    for(let i=0; i<5; i++){

        let misCoordenadas =listaFeatures[i]["geometry"]["coordinates"];
        var miMarcador =L.marker(misCoordenadas);
        miMarcador.addTo(map);

    console.log(datos["features"][i]);
    }
    
    



};

cargarPuntos();