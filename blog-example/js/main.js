let destino = document.querySelector('.blog-articles')

// obtener los datos 

fetch('data/entradas.json')
.then( res => res.json() )
.then( data => {
    

    // obtener la maqueta
    // impedir que fetch use cache
    var fetchHeaders = new Headers();
    fetchHeaders.append('pragma', 'no-cache');
    fetchHeaders.append('cache-control', 'no-cache');
    
    var fetchInit = {
      method: 'GET',
      headers: fetchHeaders,
    };

    fetch('maquetas/article.html', fetchInit)
    .then( res => res.text() )
    .then( nuevoHtml => {
        
        // para poder acceder a las propiedades del nuevo html,
        // debo intreducirlo a un contenedor
        let contenedorMaqueta = document.createElement('div');
        
        contenedorMaqueta.innerHTML = nuevoHtml;

        let maquetaArticulo = contenedorMaqueta.firstChild;
        
        data.forEach( entrada => {

            // crear copia, con contenidos interiores ('true')
            let copia = maquetaArticulo.cloneNode(true)
            
            llenarCopia( copia, entrada );

            destino.appendChild( copia );

        })    

    })

})


function llenarCopia( copia, entrada ) {
    console.log(copia.getElementsByClassName('title'));
    
    copia.getElementsByClassName('title')[0].textContent = entrada.title;
    copia.getElementsByClassName('excerpt')[0].textContent = entrada.excerpt;
    copia.getElementsByClassName('image')[0].setAttribute('src',entrada.image);

}



