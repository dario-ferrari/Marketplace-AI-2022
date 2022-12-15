import urlWebServices from './webServices.js';

export const enviarMailProfesor = async function(contratacion,profesor,clase)
{
    //url webservices
    let url = urlWebServices.enviarMail;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('destinatario', profesor.email)
    formData.append('asunto', 'Contratacion')
    formData.append('texto', `<p>Un alumno solicito poder asistir a tu curso, revisa la solicitud para tomar una decision: <br/>
    Clase: ${clase.titulo} <br/>
    Su Mensaje: ${contratacion.mensaje} <br/>
    Mail de Contacto: ${contratacion.email} <br/>
    Telefono de Contacto: ${contratacion.telefono} <br/>
    Horario Apto para Contacto: ${contratacion.horarioRef} <br/>
    <br/>
    Este es un mail informativo NO debe responderse</p>`)


    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        let rdo = response.status;
        let dataBack = await response.json();
        switch(rdo){
            case 201:
            {                    
                return ({rdo:0,dataBack});//correcto
            }
            default:
            {
                //otro error
                return ({rdo:1,mensaje:dataBack.message});                
            }
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

export const enviarMailAlumno = async function(comentario)
{
    //url webservices
    let url = urlWebServices.enviarMail;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('destinatario', comentario.usuario.email)
    formData.append('asunto', 'Eliminación de Comentario')
    formData.append('texto', `<p>Un profesor elimino un mensaje tuyo: <br/>
    Tu mensaje: ${comentario.mensaje} <br/>
    Clase: ${comentario.clase.titulo} <br/>
    Justificacion: ${comentario.justificacion} <br/>
    <br/>
    Este es un mail informativo NO debe responderse</p>`)
    

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        let rdo = response.status;
        let dataBack = await response.json();
        switch(rdo){
            case 201:
            {                    
                return ({rdo:0,dataBack});//correcto
            }
            default:
            {
                //otro error
                return ({rdo:1,mensaje:dataBack.message});                
            }
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}
