var trabajos = [{
    figure: "media/Mobiliario-Papiones.jpg",
    alt: "Se observa una estrutura compuesta de troncos y ramas gruesas, conformando 2 pisos, cada uno de 1 metro de altura aproximadamente.Hay un apersona sentada bajo la sombra del primer piso, otra persona (Sebastián Pavlovic) esta sentada en el primer piso suspendido y una tercera persona (Vicente Donoso) en el piso de más arriba.",
    title: "Mobiliario para papiones",
    about: "Entrega para taller interacción, 2017",
    url: "https://www.instagram.com/p/B1oKTXpDNht/?igshid=l09or01sye46",
}, {
    figure: "media/banca-optimizada.jpg",
    alt: "Una banca compuesta de madera terciada de 3 milimetros de espesor. Tiene una forma curviliena, con el tramo mas largo es recto, y a lo ancho tiene una curvatura semi-circular. La forma a lo largo presenta una forma de arco, con la parte superior recta.",
    title: "Banca taco",
    about: "Entrega para Estructuras y Materiales, 2019",
    url: "https://www.instagram.com/p/B1oKf_Kjm44/?igshid=lxolyjka34kk",
}, {
    figure: "media/Silent-Space-Arcade.jpg",
    alt: "Se muestra un arcade de videojuegos del tamaño de medio cuerpo, con pegatinas de naves espaciales en el frente y costados junto con el nombre del juego, Silent Space. Al frente del arcade se posicionan a la derecha la palanca de mando y a su izquierda el botón de acción. Arriba de estos últimos la pantalla muestra la imagen de inicio con el logo del juego Silent Space",
    title: "Silent Space",
    about: "Examen Final de Programación Creativa, 2019",
    url: "https://www.instagram.com/p/B1oL4ztj3_g/?igshid=1ca258k9i796c",
}, {
    figure: "media/juego-herbert-ok.jpeg",
    alt: "Un juego de mesa con sus distintos componentes desplegados en un fondo blanco",
    title: "El laboratorio de Herbert",
    about: "Entrega para Taller Producto, 2018",
    url: "https://www.instagram.com/p/B1oL_7ADyhG/?igshid=1v91z47cbyf70",
}, {
    figure: "media/Peine-para-Escobillones.jpg",
    alt: "Se muestra un escobillón junto a una pala de escoba, esta última tiene un accesorio tipo peine anclado al palo de la pala cercano a la base de la misma paralela al piso",
    title: "Peine para escobillones Virutex",
    about: "Entrega para Taller de Innovación y Desarrollo de Estrategias, 2019",
    url: "https://www.instagram.com/p/B1oKZL4D1gY/?igshid=1gsgaru3ul8e",
}, {
    figure: "media/pagina-xilofono.jpeg",
    alt: "Se ve un xilofono en la ventana de una pagina de computador. Tiene cada nota de un color distinto",
    title: "Xilófono virtual",
    about: "Entrega para Programación Crativa para Diseño, 2018",
    url: "https://www.instagram.com/p/B1w2a4bjSoT/?igshid=1wqwzqieoagtp",
}, {
    figure: "media/STRECH.jpg",
    alt: "Se muestra una persona con un accesorio textil en sus brazos. Este consiste de unas pulseras a lo largo de ambos brazos que están unidas a una tela elástica de 30 centímetros por 40 centimetros",
    title: "STRECH",
    about: "Examen para Taller Producto, 2018",
    url: "https://www.instagram.com/p/B1cGRj0j7i1/?igshid=16gr2yh0ctq18",
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '" >Ver más</a></p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});

