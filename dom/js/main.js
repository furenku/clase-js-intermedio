let el = document.getElementById('main-header');

console.log( el )

// let ps = document.getElementsByTagName('p')
// let ps = document.querySelectorAll('main .content p')
// let ps = document.querySelectorAll('main .content p[un-atributo=otro-valor]')
let ps = document.querySelectorAll('main .content p[atributo-sin-valor]')

console.log( ps )

// ps[0].textContent = "..."

for( let i = 0; i<ps.length; i++ ) {
    
    
    let el = ps[ i ]
    
    el.textContent = ( i + 1 ) + ". " + el.textContent
    
}

el.textContent = "hola mundo"

// crear nuevo elemento

let newElement = document.createElement('footer')


let newUrl = 'http://cualquierlugar'
newUrl += '?valor=' + Math.round(Math.random()*100)

let newLink = document.createElement('a')
newLink.setAttribute('href', newUrl )
newLink.setAttribute('target','_blank')
newLink.textContent = 'un enlace'


newElement.appendChild( newLink );


let mainContainer = document.getElementsByTagName('body')[0]

// mainContainer.insertBefore( newElement, mainContainer.firstChild )


// introducir algo con mas flexibilidad
document.getElementById('main-header')
.insertAdjacentElement("afterEnd", newElement );


// eliminar elemento despues de 2 segundos
setTimeout( () => {
 
    newElement.parentElement.removeChild( newElement )
 
}, 2000)