import axios from "axios";
import React, { useState } from "react";
import { AUTH_API } from "../../config/api";
import { useAuthContext } from "../../context/AuthContext";
import { ROLES } from "../../router/role";
import Input from "../../components/atoms/Input";
import "./style.css";
import Button from "../../components/atoms/Button";

const inputsArray = [
  {
    id: "firstname",
    name: "firstname",
    label: "FirstName",
    type: "text",
    placeholder: "firstname",
  },
  {
    id: "lastname",
    name: "lastname",
    label: "Lastname",
    type: "text",
    placeholder: "lastname",
  },
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
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit", formData);
    try {
      const res = axios.post(`${AUTH_API}auth/signup`);
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
        <div key={input.id} className="signup">
          <label htmlFor={input.id}>{input.label}</label>
          <Input
            inputType={input.type}
            inputId={input.id}
            inputName={input.name}
            inputValue={formData[input.id]}
            handleChange={handleChangeInput}
            placeholder={input.placeholder}
          />
        </div>
      ))}

      <Button typeOf="submit">Signup</Button>
    </form>
  );
};

export default SignupPage;
