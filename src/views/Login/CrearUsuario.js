import React, { useState } from "react";
import { ReactDOM } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import Swal from "sweetalert2";
import { crearUsuarioNuevo } from '../../controller/usuarios.controller';
import {
  Button,
  TextField
} from '@mui/material';

const roles = [
  {
    value: "PROFESOR",
    label: 'PROFESOR',
  },
  {
    value: 'ALUMNO',
    label: 'ALUMNO',
  },
];

export default function CrearUsuario ()  {

    const navigate = useNavigate();
    const volver = () =>{
        navigate("/login");
    };
    
    const [usuario,setUsuario] = React.useState({
      nombre: "",
      apellido:"",
      email: "",
      contrasena: "",
      fechaNac: "",
      experiencia: "",
      titulo: "",
      rol: "",
      avatar: "",
      contrataciones: "",
      clasesPublicadas: ""
    })
  
    const handleChange = (event) => {
      setUsuario({
        ...usuario,
        [event.target.name]: event.target.value
      })
    };

    const handleCreate = () => {
      Swal.fire({
      icon: 'success',
      title: '¡Usuario creado!',
      showConfirmButton: false,
      timer: 1500
      })
      const createUsuario = async function () {
        const respuesta = await crearUsuarioNuevo(usuario)
        console.log(
          "Console log de respuesta de back ",
          JSON.stringify(respuesta)
        );
      }
      createUsuario()
  };

  

    return (
        <div className="w-screen h-screen flex justify-center items-center ">
        <div className="bg-white w-1/3 max-w-2xl h-3/5 max-h-2xl py-10 rounded-lg">
          <h1 className="uppercase text-6xl text-center font-light">Crear Usuario</h1>
          <form autoComplete="off" noValidate>
            <div className="h-4/6 max-w-sm my-14 mx-auto flex flex-col justify-between">
              <div className="h-2/5 flex flex-col justify-around">
              <TextField type="text" placeholder="Nombre" name="nombre" onChange={handleChange}/>
              <TextField type="text" placeholder="Apellido" name="apellido" onChange={handleChange}/>
              <TextField type="text" placeholder="Email" name="email" onChange={handleChange}/>
              <TextField type="password" placeholder="Contraseña" name="contrasena" onChange={handleChange}/>
              <TextField type="text" placeholder="Fecha de Nacimiento" name="fechaNac" onChange={handleChange}/>
              <TextField type="text" placeholder="PROFESOR o ALUMNO?" name="rol" onChange={handleChange}/>
              <TextField type="text" placeholder="Experiencia" name="experiencia" onChange={handleChange}/>
              <TextField type="text" placeholder="Titulo" name="titulo" onChange={handleChange}/>
              </div> 
            <Button text={"Crear"} onClick={() => handleCreate()}>Crear</Button> <Button onClick={() => volver()}>Volver</Button>
            </div> 
          </form>
        </div>
      </div>
    );
};
    
