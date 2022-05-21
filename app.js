import {consumirCanciones} from './servicioTopCanciones.js'
import {generarToken} from './servicioGenerarToken.js'

let token=await generarToken()
console.log(token)

let canciones=await consumirCanciones()
console.log(canciones)