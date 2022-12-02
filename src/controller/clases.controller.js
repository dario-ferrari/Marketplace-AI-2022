import urlWebServices from './webServices.js';



export const guardarImgUser = async function(message)
{
    //url webservices
    let url = urlWebServices.guardarImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', message.email);
    formData.append('nombreImagen',message.imagen);
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===201)
        {
            return true;
        }
        else
        {
           return false; 
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

export const uploadFileImg= async function(files,nombres)
{
     //url webservices
     let url = urlWebServices.uploadFileImg;
  console.log("url",url)
    console.log('files', files)
    console.log('nombres',nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], nombres[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}
export const listadoClases = async function()
{
    //url webservices
    let url = urlWebServices.obtenerClases;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    //const formData = new URLSearchParams();
    //formData.append('email', localStorage.getItem('email'));
    
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
                    return ({rdo:0, clase:data.data});//correcto
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

export const buscarClasePorFiltro = async function(filtro)
{
    //url webservices
    let url = urlWebServices.obtenerClasesPorFiltro;
    
    let filtroArmado ={$and:[{titulo:{$regex:''}},{$or:[]}]}

    if(filtro.titulo.value !== ""){
        filtroArmado.$and[0]={titulo:{$regex:`${filtro.titulo.value}`, $options : 'i'}}
    }
    
    for (const prop in filtro) {
        if(filtro[prop].value && prop !== "titulo"){
            filtroArmado.$and[1].$or.push(filtro[prop].query)
        }
    }
    
    if(filtroArmado.$and[1].$or.length=== 0 ){
        filtroArmado.$and.pop(1)
    }
    console.log("print del filtro",JSON.stringify(filtroArmado))
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(filtroArmado)
        });
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                    return ({rdo:0, clase:data.data});//correcto
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

export const actualizarClase = async function(clase,id)
{
    console.log("llego al controller actualizar",clase,id)
    let url = urlWebServices.actualizarClase;

    let objetoId = {
        _id : id
    }

    let union = Object.assign(objetoId,clase)

    console.log("objeto resultante", union)

    const formData = new URLSearchParams();
    formData.append('titulo', clase.titulo);

    console.log("asi es el formdata",formData)
    //armo json con datos
    //console.log("dato",formData);
    //console.log("url",url);

    console.log("esto voy a pasar",JSON.stringify(union))
    try{
        let response = await fetch(url,{
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(union),
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                    return ({rdo:0, clase:data.data});//correcto
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

export const buscarClasePorId = async function(id)
{//url webservices
    console.log("uid que le llega al controller",id)
    let url = urlWebServices.obtenerClasesPorId;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('_id', id);
    //console.log("dato",formData);
    //console.log("url",url);
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
                    return ({rdo:0, clase:data.data});//correcto
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

export const crearClaseNueva = async function(clase)
{
    //url webservices
    let url = urlWebServices.crearClase;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('titulo', clase.titulo)
    formData.append('imagen', clase.imagen)
    formData.append('descripcion', clase.descripcion)
    formData.append('frecuencia', clase.frecuencia)
    formData.append('duracion', clase.duracion)
    formData.append('precio', clase.precio)
    formData.append('tipo', clase.tipo)
    formData.append('rating', clase.rating)
    formData.append('Usuarios_id', clase.Usuarios_id)

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

export const eliminadorClases = async function(id)
{
    console.log("esto recibe el front controller")
    //url webservices
    let url = urlWebServices.borrarClase;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
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
                return ({rdo:0,mensaje:"Se elimino"});//correcto
            }
            default:
            {
                //otro error
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
