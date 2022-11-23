import React from "react";
import { ReactDOM, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import { loggIn } from "../../store/auth/authSlice";
import { loadUserData } from "../../store/user/usersSlice";
import Swal from "sweetalert2";
import usuarios from "../../data/usuarios.js";
import {login, buscarUsuarioPorEmail } from "../../controller/usuarios.controller";

{/**Vista del Login*/}

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("")

  const handleLogIn = () => {
    console.log("email en front:",email,"pass en front:",password)
    const getUser = async function(){
      console.log("email de meirda",email)
      let respuestaUsuario = await buscarUsuarioPorEmail(email)
      console.log(respuestaUsuario)
      console.log(
        "Console log de respuesta de back para usuario en singin ",
        JSON.stringify(respuestaUsuario)
      );
      if (respuestaUsuario.rdo === 1) {
        alert(respuestaUsuario.mensaje)
      }else{
        dispatch(
          loadUserData({
            email: respuestaUsuario.user[0].email,
            username: respuestaUsuario.user[0].nombre,
          })
        );
        dispatch(loggIn());
        console.log("usuario recuperado",respuestaUsuario.user[0])
        if (respuestaUsuario.user[0].rol === "PROFESOR") {
          navigate("/profesor/clasespublicadas");
        } else {
          navigate("/alumno/menu");
        }
      }
    };

    const getLogin = async function(){
      const respuesta = await login(email,password);
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuesta)
      );
      if (respuesta.rdo === 1) {
        Swal.fire({
          icon: "error",
          title: respuesta.mensaje,
          confirmButtonText: "Ok",})
      }else{
        getUser()
      }
    };
    getLogin();
    
    
    {/**Método que se activa al clickear el botón de Login 
    const user = usuarios.find((u) => u.email === email);

    if (user) {
      dispatch(
        loadUserData({
          email: user.email,
          username: user.name,
        })
      );
      dispatch(loggIn());
      
      if (user.tipo === "PROFESOR") {
        navigate("/profesor/clasespublicadas");
      } else {
        navigate("/alumno/menu");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Usuario/contraseña incorrectos.",
        confirmButtonText: "Ok",
      });
    }
  };*/}
  }


  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="bg-white w-1/3 max-w-2xl h-3/5 max-h-2xl py-10 rounded-lg">
        <h1 className="uppercase text-6xl text-center font-light">Sign In</h1>
        <div className="h-4/6 max-w-sm my-14 mx-auto flex flex-col justify-between">
          <div className="h-2/5 flex flex-col justify-around">
            <InputForm type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <InputForm type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <ButtonForm text={"Login"} onClick={() => handleLogIn()} />
          <p className="text-center"> 
            <Link to="/forgot">
              <a className="text-secondary hover:underline	 font-bold ">
              ¿Olvidaste{" "}tu contraseña?
              </a>
            </Link>
            {" "}/ {" "}
            <Link to="/createuser">
              <a className="text-secondary hover:underline	 font-bold ">
                Crear Usuario
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
