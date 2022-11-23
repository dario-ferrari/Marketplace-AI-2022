const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"usuarios/login",
    registration:urlApi +"usuarios/registration",
    obtenerUsuarios : urlApi + "usuarios/all",
    actualizarUsuario : urlApi + "usuarios/update",
    borrarUsuario : urlApi + "usuarios/delete/:id",
    obtenerUsuariobyEmail: urlApi + "usuarios/userByMail",
    //guardarImgUser: urlApi + "users/guardarImgUser",
    //getImgUser: urlApi + "users/imgUserByMail",
    //uploadFileImg: urlApi + "users/uploadImg",


    crearClase : urlApi +"clases/create",
    obtenerClases : urlApi +"clases/all",
    obtenerClasesPorNombre: urlApi +"clases/:titulo",
    obtenerClasesPorId : urlApi + "clases/id",
    actualizarClase : urlApi +"clases/edit",
    borrarClase: urlApi + "clases/delete"


}

export default urlWebServices;