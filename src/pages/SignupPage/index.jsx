import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import Input from "../../components/atoms/Input";
import "./style.css";
import Button from "../../components/atoms/Button";
import { SIGNUP_INPUTS } from "../../constants/auth";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,15}$/;

const formSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  email: Yup.string()
    .email()
    .matches(emailRegex, "Enter Correct Email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(15, "Password must be at least 15 characters long")
    .matches(
      passwordRegex,
      "Password must contain at least one Lowercase letter, one Uppercase letter, one Number, and one Special character"
    ),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),

  checked: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const SignupPage = () => {
  const [showPass, setShowPass] = useState({
    password: false,
    rePassword: false,
  });
  const { signup, isLoading } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    signup(data);
    reset();
  };

  const handleShowPass = (field) => {
    setShowPass((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {SIGNUP_INPUTS.map(({ id, label, type, name }) => (
        <div key={id} className="box">
          {label !== "checkbox" && <label htmlFor={id}>{label}</label>}
          <Input
            inputType={
              type === "password"
                ? showPass[name]
                  ? "text"
                  : "password"
                : type
            }
            inputId={id}
            inputName={name}
            showImage={type === "password"}
            eyeImgSrc={
              type === "password" && showPass[name]
                ? "/assets/eye.svg"
                : "/assets/eye-off.svg"
            }
            onClick={() => handleShowPass(name)}
            register={register}
          />
          {errors[name] && <p className="error">{errors[name]?.message}</p>}
        </div>
      ))}
      <Button typeOf="submit">{isLoading ? "Loading..." : "Signup"}</Button>
    </form>
  );
};

export default SignupPage;
