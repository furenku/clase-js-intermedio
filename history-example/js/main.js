
// Para página inicial: 
let firstContent = document.getElementsByTagName('main')[0].innerHTML

history.replaceState({
    content: firstContent
},
'History!!!',
''
)

let loader = document.getElementsByClassName('loader-container')[0]
let mainContainer = document.getElementsByTagName('main')[0]

// loader.style = "display: none";




function back() {
    history.back()
}

function forward() {
    history.forward()
}

function go(step) {
    history.go(step)
}

function randomUrl() {
    
    showLoader()
    
    let randomNumber = Math.round( Math.random() * 100 );
    
    let newHtml = document.createElement('h2')
    .innerHTML = `nuevo valor: ${randomNumber}`;
    
    history.pushState(
        {
            content: newHtml 
        },
        `random url ${randomNumber}`,
        `?random_url=${randomNumber}`,
        
    )
    
    setView( newHtml )
    
}

function loadUrl(url) {
    
    showLoader()
    
    fetch( url )
    .then( res => res.text() )
    .then( resultHtml => {
        
        let container = document.createElement('div')
        container.innerHTML = resultHtml
        
        let pageContent = container.getElementsByTagName('main')[0].innerHTML
        let pageTitle = container.getElementsByTagName('h1')[0].innerHTML
        
        history.pushState(
            {
                content: pageContent
            },
            pageTitle,
            ''
        );
      
        
        setView( pageContent )

            
    })
    
}

function showLoader() {
    loader.style = "opacity: 1;";
    mainContainer.style = "opacity: 0;";
}

function hideLoader() {
    
    loader.style = "opacity: 0;";
    mainContainer.style = "opacity: 1;";
    
}

function setView( content ) {
    
    setTimeout( () => {
        
        mainContainer.innerHTML = content

        hideLoader()

    }, 600 )
    
}



window.onpopstate = function( e ) {
    showLoader();
    setView( e.state.content )
}