export const AUTH_PATHS = {
  LOGIN: "users/login",
  SIGNUP: "users/signup",
  PROFILE: "users/profile"
}

export const AUTH_ACTIONS = {
  AUTHORIZE: "AUTHORIZE",
  LOGOUT: "LOGOUT",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR"
}

export const SIGNUP_INPUTS = [
  {
    id: "username",
    name: "username",
    label: "UserName",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "rePassword",
    name: "rePassword",
    label: "Repeat Password",
    type: "password",
  },
];

export const LOGIN_INPUTS = [
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
  }
];