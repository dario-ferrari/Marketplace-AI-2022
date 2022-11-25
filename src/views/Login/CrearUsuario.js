import React, { useState } from "react";
import { ReactDOM } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import Swal from "sweetalert2";
import { crearUsuarioNuevo } from '../../controller/ussuarios.controller';
import { UserContext } from '../../Contexts/UserContext';


const CrearUsuario = () => {

    /**const navigate = useNavigate();
    const volver = () =>{
        navigate("/login");
    };**/

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const currentUser = React.useContext(UserContext)
  
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const [usuario,setUsuario] = React.useState({
      nombre: "",
      email: "",
      contrasena: 0,
      fechaNac: "",
      experiencia: "",
      titulo: "",
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
    }).then((result) => {
      if (result.isConfirmed) {
        const createUsuario = async function () {
          const respuesta = await crearUsuarioNuevo(usuario)
          console.log(
            "Console log de respuesta de back ",
            JSON.stringify(respuesta)
          );
          if (respuesta.rdo === 1) {
            Swal.fire({
              icon: 'error',
              title: 'Ocurrio un error',
              showConfirmButton: false,
            })
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Se creo correctamente',
              showConfirmButton: false,
            })
          }
        }
        createUsuario()
      }
    })
};

  

    return (
        <div className="w-screen h-screen flex justify-center items-center ">
        <div className="bg-white w-1/3 max-w-2xl h-3/5 max-h-2xl py-10 rounded-lg">
          <h1 className="uppercase text-6xl text-center font-light">Crear Usuario</h1>
          <div className="h-4/6 max-w-sm my-14 mx-auto flex flex-col justify-between">
            <div className="h-2/5 flex flex-col justify-around">
              <InputForm type="text" placeholder="Nombre y Apellido"/>
              <InputForm type="text" placeholder="Email"/>
              <InputForm type="password" placeholder="Contraseña" />
            </div>
            <ButtonForm text={"Crear"} onClick={() => handleCreate()}/> <ButtonForm text={"Volver"} onClick={() => volver()}/>
          </div>
        </div>
      </div>
    );
};
    
export default CrearUsuario;