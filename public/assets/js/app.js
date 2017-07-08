(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root) => {
    //root.empty();
    root.append(Header());
    root.append(LoUltimo());

};

const state = {
    
    screen: null

};

$(_ => {
    const root = $('.root');
    render(root);
});


'use strict';
const Header = () => {
    const header = $('<header class="container"></header>');
    
    const navDesktop = $('<div class="row hidden-xs head-item search"><div class="col-sm-2"><img src="assets/img/menu.png"> SECTIONS</div><div class="col-sm-2"><img src="assets/img/search.png"> SEARCH</div><div class="col-sm-2 col-sm-offset-6 redes"><img src="assets/img/fb.png"><img src="assets/img/tw.png"><img src="assets/img/in.png"></div></div><div class="row hidden-xs text-center head-item"><img src="assets/img/logoicon.png" alt=""><br><br><p>Lunes, Junio 12 de 2017 | <img src="assets/img/cloud.png"> 22°</p></div>');
    
    const menu = $('<div class="row menu hidden-xs"><ul><li>Lo último</li><li>Opinión </li><li>Cultura</li><li>Perú</li>     <li>Tecnologia</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li></ul></div>');
    
    const navMobile = $('<div class="row hidden-sm hidden-md hidden-lg nav-mobile"><div class="col-xs-8"><img src="assets/img/logoicon.png" class="text-left" alt="Laboratoria" height="30"></div><div class="col-xs-2 col-xs-offset-2"><img src="assets/img/menu.png" height="25"></div></div>');

    header.append(navDesktop);
    header.append(menu)
    header.append(navMobile);
    
    return header;
}

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

'use strict';
const Mundo = () => {
    
}
'use strict';
const Tecnologia = () => {
    
}
'use strict';


const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

},{}]},{},[1])