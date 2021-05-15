$(document).ready(function(){
    agregarMenu();
    agregarFooter();
});

function agregarMenu(){
    var header = document.getElementById("Menu");
    header.innerHTML = 
        '<section class="">'+
        '<div class="banner">'+
            '<img class="imgBanner" src="https://cdn.pixabay.com/photo/2017/09/09/11/52/t-shirts-2731768_1280.jpg"/>'+
            '<div class="container">'+        
                '<div class="text-bg formatoTexto">'+
                    '<h2><span class="textoBanner">Tienda virtual Zebra</span></h2>'+
                '</div>'+        
            '</div>'+
        '</div>'+        
        '</section>'+
        '<nav id="menuGlobal" class="navbar navbar-expand-lg navbar-light bg-dark">'+
            '<a class="navbar-brand" href="/tarea/">Zebra</a>'+
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">'+
                '<span class="navbar-toggler-icon"></span>'+
            '</button>'+
            '<div class="collapse navbar-collapse" id="navbarNavDropdown">'+
                '<ul class="navbar-nav">'+
                    '<li class="nav-item">'+
                        '<a class="nav-link" href="/tarea/services.html">Servicios</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a class="nav-link" href="/tarea/man.html">Ropa para caballeros</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a class="nav-link" href="/tarea/woman.html">Ropa para damas</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a class="nav-link" href="/tarea/clothingSize.html">Tallas</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<a class="nav-link" href="/tarea/contact.html">Contactanos</a>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
        '</nav>'
    }

    function agregarFooter(){

        var footer = document.getElementById("Footer");

        footer.innerHTML = 

        '<footer  class="bg-dark text-center text-white">'+
        
            '<div class="container p-4">'+
            
                '<section class="mb-4">'+
                    
                    '<a class="btn btn-outline-light btn-floating m-1" href="https://es-la.facebook.com/" role="button">'+
                        '<i class="fab fa-facebook-f"></i>'+
                    '</a>'+
            
                    '<a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/?hl=es-la" role="button">'+
                        '<i class="fab fa-instagram"></i>'+
                    '</a>'+
            
                    '<a class="btn btn-outline-light btn-floating m-1" href="https://github.com/seleniaB" role="button">'+
                        '<i class="fab fa-github"></i>'+
                    '</a>'+
                '</section>'+

                '<section class="mb-4">'+
                    '<p class="textoFooter">'+
                        'Zebra es una pequeña tienda virtual dedicada a la venta de ropa, en donde '+
                        'nuestro objetivo principal es brindar ropa de calidad a un precio justo. '+
                    '</p>'+
                    '<p><b>Horario:</b> de lunes a sabádo de 8am a 8pm</p>'+
                '</section>'+
        
            '</div>'+
        
            
            '<div class="text-center p-3 footerInferior">'+
                '©2021 '+
            '</div>'+
        
    '</footer>'
    
}

