import React, { useState } from "react";
import { ReactDOM } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
      estudios:"",
      experiencia: "",
      titulo: "",
      rol: "ALUMNO",
      avatar:"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
    })
  
    const handleChange = (event) => {
      console.log(event.target.name, event.target.value)
      setUsuario({
        ...usuario,
        [event.target.name]: event.target.value
      })
      console.log(usuario)
    };

    const handleCreate = () => {
      Swal.fire({
      icon: 'success',
      title: '¡Usuario creado!',
      showConfirmButton: false,
      timer: 1500
      })
      const createUsuario = async function () {
        console.log(usuario)
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
        <div className="bg-white w-1/3 max-w-2xl max-h-2xl py-10 rounded-lg">
          <h1 className="uppercase text-6xl text-center font-light">Crear Usuario</h1>
          <form autoComplete="off" noValidate>
            <div className="h-4/6 max-w-sm my-14 mx-auto flex flex-col justify-between">
              <div className="h-2/5 flex flex-col justify-around">
              <TextField type="text" placeholder="Nombre" name="nombre"
              margin="dense" onChange={handleChange}/>
              <TextField type="text" placeholder="Apellido" name="apellido" 
              margin="dense" onChange={handleChange}/>
              <TextField margin="dense" type="text" placeholder="Email" name="email" onChange={handleChange}/>
              <TextField  margin="dense" type="password" placeholder="Contraseña" name="contrasena" onChange={handleChange}/>
              <TextField margin="dense" type="text" placeholder="Fecha de Nacimiento" name="fechaNac" onChange={handleChange}/>
                <FormLabel id="rol">Rol</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="rol"
                  name="rol"
                  value={usuario.rol}
                  onChange={handleChange}
                >
                  <FormControlLabel value="ALUMNO" control={<Radio />} label="Alumno" />
                  <FormControlLabel value="PROFESOR" control={<Radio />} label="Profesor" />
                </RadioGroup>
                {usuario.rol === "ALUMNO" ? (
                  <TextField type="text" placeholder="Estudios" name="estudios" onChange={handleChange}/>
                ):(
                    <>
                      <TextField type="text" margin="dense" placeholder="Experiencia" name="experiencia" onChange={handleChange} />
                      <TextField type="text"  margin="dense" placeholder="Titulo" name="titulo" onChange={handleChange} />
                    </>
                )}
              
              </div> 
            <Button text={"Crear"} onClick={() => handleCreate()}>Crear</Button> <Button onClick={() => volver()}>Volver</Button>
            </div> 
          </form>
        </div>
      </div>
    );
};
    
