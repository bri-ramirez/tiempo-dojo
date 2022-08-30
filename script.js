function weatherReport(){
    alert("loading weather report...");
}

function removeAlert(){
    var element = document.getElementById("alert");
    element.remove();
}

function calculateDegrees(degree){
    //selecciona todos los elementos que hagan match con el selector
    var elements = document.querySelectorAll('.temperature div');
    
    // forchEach recorrera todos los elementos encontrados anteriormente
    // ejecutara una funcion que recibira como parametro un elemento de la lista
    // cada elemento será un div ( max y min )
    elements.forEach( function(element){
        // obtenemos el texto dentro del div
        var text = element.innerHTML;

        // le quietamos el último caracter, solo dejamos el número
        var textDegree = text.substring(0, text.length - 1);

        // comparamos lo que seleccionamos en el select
        if(degree == 'c'){
            var fdegree = convertToCelsius(textDegree);
        } else {
            var fdegree = convertToFahrenheit(textDegree);
        }

        // le volvemos a añadir el signo y le asignamos el nuevo texto al div (max - min)
        element.innerHTML = fdegree + "°";
    });
}

function convertToFahrenheit(degree){
    return Math.round( degree * 1.8 + 32 );
}

function convertToCelsius(degree){
    return Math.round( (degree - 32) / 1.8 );
}
