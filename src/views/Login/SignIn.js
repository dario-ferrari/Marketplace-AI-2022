import React from "react";
import { ReactDOM } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import { loggIn } from "../../store/auth/authSlice";
import { loadUserData } from "../../store/user/usersSlice";

{/**Vista del Login*/}

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogIn = () => {
    {/**Método que se activa al clickear el botón de Login */}
    dispatch(
      loadUserData({
        username: "Juan",
      })
    );
    dispatch(loggIn());
    navigate("/alumno/menu");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="bg-white w-1/4 max-w-2xl h-3/5 max-h-2xl py-10 rounded-lg">
        <h1 className="uppercase text-6xl text-center font-light">Sign In</h1>
        <form className="h-4/6 max-w-sm my-14 mx-auto flex flex-col justify-between">
          <div className="h-2/5 flex flex-col justify-around">
            <InputForm type="text" placeholder="Email" />
            <InputForm type="password" placeholder="Contraseña" />
          </div>
          <ButtonForm text={"Login"} onClick={() => handleLogIn()} />
          <p className="text-center">
            Did you{" "}
            <Link to="/forgot">
              <a className="text-secondary hover:underline	 font-bold ">
                forgot your password
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
