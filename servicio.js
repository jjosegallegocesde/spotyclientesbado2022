//PASOS PARA CONSUMIR UN API






//3. ARRANCA PS OME PAL SERVIDOR (CONSUMIR EL API)(el que va al servidor)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json()) //garantizo formato JSON
})
.then(function(respuesta){
    pintarCanciones(respuesta) //hago lo que quiera con la respuesta
})
.catch(function(respuesta){
    console.log(respuesta) //muestro el fallo si no se pudo consumir el api
})


//FUNCION PARA PINTAR LA INFO QUE LLEGA DEL API
function pintarCanciones(canciones){
   
    let fila=document.getElementById("fila")

    //recorro el arreglo de canciones
    canciones.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear una columna para cada cancion
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo la tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")

        //creo la foto
        let foto=document.createElement("img")
        foto.src=cancion.album.images[0].url
        foto.classList.add("card-img-top")

        //creo el audio
        let audio=document.createElement("audio")
        audio.src=cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")

        //PADRES E HIJOS
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
}