import {config} from 'dotenv';

if(process.env.NODE_ENV !=='production'){
    config();//se exponen todas las variables de entorno en el ambiente de desarollo. En caso de producción, se tomaria las variables de la maquina
}

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
//export default here; --> puedo exportar por defecto y así no debo de usar los {}. O sea coloco algo alli por defecto para cuando no use los {} ps me toma el tipo que tengo alli