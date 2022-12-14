import urlWebServices from './webServices.js';

export const crearComentarioNuevo = async function(comentario)
{
    let url = urlWebServices.crearComentario;
    const formData = new URLSearchParams();
    formData.append('clase', comentario.clase)
    formData.append('usuario', comentario.usuario)
    formData.append('mensaje', comentario.mensaje)
    formData.append('estado', comentario.estado)
    formData.append('justificacion', comentario.justificacion)

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
        console.log(JSON.stringify(dataBack))
        switch(rdo){
            case 201:
            {                    
                return ({rdo:0,dataBack});
            }
            default:
            {
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

export const listadoComentarios = async function()
{

    let url = urlWebServices.obtenerComentarios;
    
    try
    {
        let response = await fetch(url,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            //body:formData
        });
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                    return ({rdo:0, Comentario:data.data});
                }
                default:
                {
                    return ({rdo:1,mensaje:data.message});                
                }
            }
    }
    catch(error){
        console.log("error",error);
    };
}

export const buscarComentarioPorId = async function(id)
{
    let url = urlWebServices.obtenerComentariosPorId;
    const formData = new URLSearchParams();
    formData.append('_id', id);
    try{
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                    return ({rdo:0, comentario:data.data});
                }
                default:
                {
                    return ({rdo:1,mensaje:data.message});                
                }
            }
    }
    catch(error){
        console.log("error",error);
    };

}

export const eliminadorComentarios = async function(id)
{
    console.log("esto recibe el front controller")
    let url = urlWebServices.borrarComentario;
    const formData = new URLSearchParams();
    formData.append('_id', id)
    try
    {
        let response = await fetch(url,{
            method: 'DELETE', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        let rdo = response.status;
        console.log(response)
        switch(rdo){
            case 200:
            {                    
                return ({rdo:0,mensaje:"Se elimino"});
            }
            default:
            {
                return ({rdo:1,mensaje:"No se elimino"});                
            }
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

export const actualizarComentario= async function(comentario)
{
    console.log("llego al controller actualizar",comentario)
    let url = urlWebServices.actualizarComentario;



    //armo json con datos
    //console.log("dato",formData);
    //console.log("url",url);
    try{
        let response = await fetch(url,{
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comentario),
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                    return ({rdo:0, comentario:data.data});//correcto
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:data.message});                
                }
            }
    }
    catch(error){
        console.log("error",error);
    };

}