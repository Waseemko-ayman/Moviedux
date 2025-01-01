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
    label: "LastName",
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
  const [showPass, setShowPass] = useState(false);
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
      const res = await axios.post(`${AUTH_API}signup`, formData);
      setUser(res.data);
      setToken(res.data.token);
      setRole(ROLES.ADMIN);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", ROLES.ADMIN);
    } catch (error) {
      console.error(
        "signup failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleChangeInput = ({ target: { value, name } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const hadnleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputsArray.map((input) => (
        <div key={input.id} className="signup">
          <label htmlFor={input.id}>{input.label}</label>
          <Input
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
            placeholder={input.placeholder}
            eyeImgSrc={showPass ? "/assets/eye.svg" : "/assets/eye-off.svg"}
            onClick={hadnleShowPass}
          />
        </div>
      ))}

      <Button typeOf="submit">Signup</Button>
    </form>
  );
};

export default SignupPage;
