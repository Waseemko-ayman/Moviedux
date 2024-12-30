import axios from "axios";
import React, { useState } from "react";
import { AUTH_API } from "../../config/api";
import { useAuthContext } from "../../context/AuthContext";
import { ROLES } from "../../router/role";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import "./style.css";

const inputsArray = [
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "your email...",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "your password...",
  },
];

const SignupPage = () => {
  const { setUser, setToken, setRole } = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post(`${AUTH_API}auth/login`);
      setUser(res.data.data);
      setToken(res.data.data.token);
      setRole(ROLES.USER);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = ({ target: { value, name } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      {inputsArray.map((input) => (
        <div key={input.id} className="login">
          <label htmlFor={input.id}>{input.label}</label>
          <Input
            key={input.id}
            inputType={input.type}
            inputId={input.id}
            inputName={input.name}
            inputValue={formData[input.id]}
            handleChange={handleChangeInput}
            placeholder={input.placeholder}
          />
        </div>
      ))}

      <Button typeOf="submit">Login</Button>
    </form>
  );
};

export default SignupPage;
