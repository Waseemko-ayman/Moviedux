import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import { LOGIN_INPUTS } from '../../constants/auth';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ContentLoading from '../../components/molecules/ContentLoading';
import { StyledErrorMessage, StyledFieldsBox, StyledLabel } from '../../styles/common';

const formSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPage = () => {
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
    console.log(data)
    reset();
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {LOGIN_INPUTS.map(({ id, label, type, name }) => (
        <StyledFieldsBox key={id}>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <Input
            key={id}
            inputType={
              type === 'password' ? (showPass ? 'text' : 'password') : type
            }
            inputId={id}
            inputName={name}
            showImage={type === 'password'}
            eyeImgSrc={
              type === 'password' && showPass
                ? '/assets/eye.svg'
                : '/assets/eye-off.svg'
            }
            onClick={handleShowPass}
            register={register}
          />
          {errors[name] && (
            <StyledErrorMessage>{errors[name]?.message}</StyledErrorMessage>
          )}
        </StyledFieldsBox>
      ))}

      <Button typeOf="submit">
        {isLoading ? <ContentLoading size={24} /> : 'Login'}
      </Button>
    </form>
  );
};

export default LoginPage;
