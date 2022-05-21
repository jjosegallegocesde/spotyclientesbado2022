//1. PA ONDE VOY? (CONOCER URI DEL SERVICIO O API A CONSUMIR)
export const URI_TOP_CANCIONES='https://api.spotify.com/v1/artists/4jirsf9rymh8ajWTRRnF5g/top-tracks?market=US'

//1.1 uri del servicio que genera tokens
export const URI_GENERAR_TOKEN='https://accounts.spotify.com/api/token'

//NOTA: DATOS DE ENVIO (POST)
const DATO1="client_id=ca73dd69551e488aa81e484470f5bc46"
const DATO2="client_secret=f2fd8c3050fa4ad6a91b08b759875bc0"
const DATO3="grant_type=client_credentials"

const DATOS_PETICION=`${DATO1}&${DATO2}&${DATO3}`

export const PETICION_GENERAR_TOKEN={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATOS_PETICION
}



//2. ARMO LA PETICION (que vas a hacer ome?)
const TOKEN='Bearer BQCs_bTTn-jrtqP1WiZp4TunYSwZGFavsa79EDDiVqyw8Sjw2dDLjDieQgMiq5mXGrJhwEXqJ7ypVMZd9bWNg7zmI6LjRObi90VNIaDyG6L_ActuaIjqk8A34XpVpIa3sQzNinDQuglFgFtHOVo'

export const PETICION_TOP_CANCIONES={
    method:"GET",
    headers:{Authorization:TOKEN}
}