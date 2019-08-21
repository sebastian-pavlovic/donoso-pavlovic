var trabajos = [{
    figure: "media/Mobiliario-Papiones.jpg",
    alt: "Se observa una estrutura compuesta de troncos y ramas gruesas, conformando 2 pisos, cada uno de 1 metro de altura aproximadamente.Hay un apersona sentada bajo la sombra del primer piso, otra persona (Sebastián Pavlovic) esta sentada en el primer piso suspendido y una tercera persona (Vicente Donoso) en el piso de más arriba.",
    title: "Mobiliario para papiones",
    about: "Entrega para taller interacción, 2017"
}, {
    figure: "media/banca-optimizada.jpg",
    alt: "Una banca compuesta de madera terciada de 3 milimetros de espesor. Tiene una forma curviliena, con el tramo mas largo es recto, y a lo ancho tiene una curvatura semi-circular. La forma a lo largo presenta una forma de arco, con la parte superior recta.",
    title: "Banca taco",
    about: "Entrega para Estructuras y Materiales, 2019"
}, {
    figure: "media/Silent-Space-Arcade.jpg",
    alt: "Descripción de la imagen",
    title: "Silent Space",
    about: "Examen Final de Programación Creativa, 2019"
}, {
    figure: "media/juego-herbert-ok.jpeg",
    alt: "Un juego de mesa con sus distintos componentes desplegados en un fondo blanco",
    title: "El laboratorio de Herbert",
    about: "Entrega para Taller Producto, 2018"
}, {
    figure: "media/Peine-para-Escobillones.jpg",
    alt: "Descripción de la imagen",
    title: "Peine para escobillones Virutex",
    about: "Entrega para Taller de Innovación y Desarrollo de Estrategias, 2019"
}, {
    figure: "media/logo-cierra-el-ciclo-ok.png",
    alt: "Descripción de la imagen",
    title: "Cierra el Ciclo",
    about: "Entrega Taller de Innovación y Desarrollo de Estrategias, 2019"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
