import React from "react";
import { useRoutes } from "react-router-dom";
import MovieProvider from "../components/organism/MovieProvider";
import { routes } from "./routes";

const Router = () => {
  const router = useRoutes([...routes]);
  return <MovieProvider>{router}</MovieProvider>;
};

export default Router;
