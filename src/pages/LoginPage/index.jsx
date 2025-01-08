import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import "./style.css";
import { LOGIN_INPUTS } from "../../constants/auth";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignupPage = () => {
  const [showPass, setShowPass] = useState(false);
  const { login, isLoading } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    login(data);
    reset();
  };

  const hadnleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {LOGIN_INPUTS.map(({ id, label, type, name }) => (
        <div key={id} className="login">
          <label htmlFor={id}>{label}</label>
          <Input
            key={id}
            inputType={
              type === "password"
                ? showPass[name]
                  ? "text"
                  : "password"
                : type
            }
            inputId={id}
            inputName={name}
            eyeImgSrc={showPass ? "/assets/eye.svg" : "/assets/eye-off.svg"}
            onClick={hadnleShowPass}
            register={register}
          />
          {errors[name] && <p className="error">{errors[name]?.message}</p>}
        </div>
      ))}

      <Button typeOf="submit">{isLoading ? "Loading..." : "Login"}</Button>
    </form>
  );
};

export default SignupPage;
