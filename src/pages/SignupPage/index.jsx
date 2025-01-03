import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import Input from "../../components/atoms/Input";
import "./style.css";
import Button from "../../components/atoms/Button";
import { SIGNUP_INPUTS } from "../../constants/auth";

const SignupPage = () => {
  const [showPass, setShowPass] = useState(false);
  const { signup, isLoading } = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password === formData.rePassword) {
      signup({
        name: formData.username,
        email: formData.email,
        password: formData.password,
      });
    } else {
      alert("Password and Repeat password are not the same");
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
      {SIGNUP_INPUTS.map((input) => (
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
            eyeImgSrc={showPass ? "/assets/eye.svg" : "/assets/eye-off.svg"}
            onClick={hadnleShowPass}
          />
        </div>
      ))}

      <Button typeOf="submit">{isLoading ? "Loading..." : "Signup"}</Button>
    </form>
  );
};

export default SignupPage;
