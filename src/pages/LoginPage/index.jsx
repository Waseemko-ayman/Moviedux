import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import "./style.css";
import { LOGIN_INPUTS } from "../../constants/auth";

const SignupPage = () => {
  const [showPass, setShowPass] = useState(false);
  const { login, isLoading } = useAuthContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleChangeInput = ({ target: { value, name } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const hadnleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <form onSubmit={handleSubmit}>
      {LOGIN_INPUTS.map((input) => (
        <div key={input.id} className="login">
          <label htmlFor={input.id}>{input.label}</label>
          <Input
            key={input.id}
            inputType={
              input.type === "password"
                ? showPass
                  ? "text"
                  : "password"
                : input.type
            }
            inputId={input.id}
            inputName={input.name}
            inputValue={formData[input.id]}
            handleChange={handleChangeInput}
            eyeImgSrc={showPass ? "/assets/eye.svg" : "/assets/eye-off.svg"}
            onClick={hadnleShowPass}
          />
        </div>
      ))}

      <Button typeOf="submit">{isLoading ? "Loading..." : "Login"}</Button>
    </form>
  );
};

export default SignupPage;
