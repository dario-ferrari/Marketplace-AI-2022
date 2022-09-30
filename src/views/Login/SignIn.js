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

{/**Vista del Login*/}

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogIn = () => {
    {/**Método que se activa al clickear el botón de Login */}
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
  };

  const [email, setEmail] = useState("");

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="bg-white w-1/3 max-w-2xl h-3/5 max-h-2xl py-10 rounded-lg">
        <h1 className="uppercase text-6xl text-center font-light">Sign In</h1>
        <div className="h-4/6 max-w-sm my-14 mx-auto flex flex-col justify-between">
          <div className="h-2/5 flex flex-col justify-around">
            <InputForm type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <InputForm type="password" placeholder="Contraseña" />
          </div>
          <ButtonForm text={"Login"} onClick={() => handleLogIn()} />
          <p className="text-center">
            ¿Olvidaste{" "}
            <Link to="/forgot">
              <a className="text-secondary hover:underline	 font-bold ">
                tu contraseña?
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
