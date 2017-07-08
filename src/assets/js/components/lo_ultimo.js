'use strict';
const LoUltimo = (category) => {
    const divUltimo = $('<section class="container"></section>');
    const divImagen = $('<div class="row noticia"></div>');
    const categoria = $('<h4 class="hidden-sm hidden-md hidden-lg text-uppercase"><strong>lo último</strong></h4>');
    const imagen = $('<img src="assets/img/news/news-0.png">');
    const divInfo = $('<div></div>');
    const titulo = $('<h1 class="text-uppercase">titulo</h1>');
    const subtitulo = $('<p class="hidden-xs">descr</p>');
    
    const row = $('<div class="row"><div class="col-sm-6"><img class="imagen" src="assets/img/news/news-1.png"><div class="bg-gray"><h5>titulo</h5></div></div><div class="col-sm-3"><img class="imagen" src="assets/img/news/news-2.png"><div class="bg-gray"><h5>titulo</h5></div></div><div class="col-sm-3"><img class="imagen" src="assets/img/news/news-3.png"><div class="bg-gray"><h5>titulo</h5></div></div></div>');   
    

    divInfo.append(titulo);
    divInfo.append(subtitulo);

    divImagen.append(categoria);
    divImagen.append(imagen);
    divImagen.append(divInfo);

    divUltimo.append(divImagen);
    divUltimo.append(row);

/*
    $.getJSON("/api/news/0", (response) => {
        foto = response;
        //console.log(response[2]);
    });
*/



    return divUltimo;
}
