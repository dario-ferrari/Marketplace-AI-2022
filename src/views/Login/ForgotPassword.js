import React, { useState } from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSubmit = () => {
    setMessageVisible(true);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-1/3 max-w-2xl h-3/5 max-h-2xl py-10 rounded-lg">
        <h1 className="uppercase text-6xl text-center font-light">
          Forgot Password
        </h1>
        {!messageVisible ? (
          <form className="h-4/6 max-w-sm my-5 mx-auto flex flex-col justify-around">
            <div className="h-2/5 flex flex-col justify-around">
              <InputForm
                type="email"
                placeholder="Tu email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-around items-center">
              <ButtonForm text={"Enviar"} onClick={() => handleSubmit()} />
              <p className="text-center">
                Volver a{" "}
                <Link to="/">
                  <a className="text-secondary hover:underline font-bold ">
                    sign in
                  </a>
                </Link>
              </p>
            </div>
          </form>
        ) : (
          <div className="w-3/4 h-1/2 mx-auto my-10 flex flex-col justify-between text-center">
            <p>
              Un email con tu nueva contraseña temporaria se ha enviado a <span className="text-secondary font-bold">{email}</span>. La próxima vez que inicies sesión vas a tener que cambiar tu contraseña
              por una nueva.
            </p>
            <Link to="/">
              <ButtonForm text={"Volver"} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
