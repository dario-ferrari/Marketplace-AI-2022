import React, { useState } from "react";
import { ReactDOM } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import Swal from "sweetalert2";

const handleCreate = () => {
      Swal.fire({
        icon: 'success',
        title: '¡Usuario creado!',
        showConfirmButton: false,
        timer: 1500
    });
};

const CrearUsuario = () => {

    const navigate = useNavigate();
    const volver = () =>{
        navigate("/login");
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