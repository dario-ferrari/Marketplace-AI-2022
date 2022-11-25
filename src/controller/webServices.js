const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"usuarios/login",
    registration:urlApi +"usuarios/registration",
    obtenerUsuarios : urlApi + "usuarios/all",
    actualizarUsuario : urlApi + "usuarios/update",
    borrarUsuario : urlApi + "usuarios/remove/id",
    obtenerUsuariobyEmail: urlApi + "usuarios/userByMail",
    obtenerUsuariobyId: urlApi + "usuarios/id",
    //guardarImgUser: urlApi + "users/guardarImgUser",
    //getImgUser: urlApi + "users/imgUserByMail",
    //uploadFileImg: urlApi + "users/uploadImg",


    crearClase : urlApi +"clases/create",
    obtenerClases : urlApi +"clases/all",
    obtenerClasesPorNombre: urlApi +"clases/titulo",
    obtenerClasesPorId : urlApi + "clases/id",
    actualizarClase : urlApi +"clases/edit",
    borrarClase: urlApi + "clases/delete",


    crearComentario: urlApi+"comentarios/create",
    obtenerComentarios: urlApi+"comentarios/all",
    obtenerComentariosPorId: urlApi+"comentarios/id",
    obtenerComentariosPorUsuario: urlApi+"comentarios/user",
    borrarComentario: urlApi+"comentarios/delete",


    crearContrataciones: urlApi+"contrataciones/create",
    obtenerContrataciones: urlApi+"contrataciones/all",
    obtenerContratacionesPorId: urlApi+"contrataciones/id",
    actualizarContrataciones: urlApi+"contrataciones/update",
    borrarContratacion: urlApi+"contrataciones/delete"

}

export default urlWebServices;