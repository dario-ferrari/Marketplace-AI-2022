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
      <div className="bg-white w-1/4 max-w-2xl h-2/4 max-h-2xl py-10 rounded-lg">
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
              <ButtonForm text={"Send"} onClick={() => handleSubmit()} />
              <p className="text-center">
                Back to{" "}
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
              An email with your new temporary password has been sent to <span className="text-secondary font-bold">{email}</span>. The next time you login, you will have to change to your new
              password.
            </p>
            <Link to="/">
              <ButtonForm text={"Return"} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
