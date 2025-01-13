import { Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import { lazy } from "react";

import AdminGuard from "../Guards/AdminGuard";
import UserGuard from "../Guards/UserGuard";
import GuestGuard from "../Guards/GuestGuard";

const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const WatchlistPage = lazy(() => import("../pages/WatchlistPage"));
const MoviePage = lazy(() => import("../pages/MoviePage"));
const EditMoviePage = lazy(() => import("../pages/EditMoviePage"));
const CreateMoviePage = lazy(() => import("../pages/CreateMoviePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));

export const adminPages = [
  {
    path: PATHS.MOVIES.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <MoviesPage />
      },
      {
        path: PATHS.MOVIES.VIEW,
        element: <MoviePage />
      },
      {
        path: PATHS.MOVIES.EDIT,
        element: <EditMoviePage />
      },
      {
        path: PATHS.MOVIES.CREATE,
        element: <CreateMoviePage />
      },
      {
        path: PATHS.MOVIES.WATCHLIST,
        element: <WatchlistPage />,
      },
    ]
  },
]

export const userPages = [
  {
    path: PATHS.MOVIES.ROOT,
    element: <UserGuard />,
    children: [
      {
        index: true,
        element: <MoviesPage />,
      },
      {
        path: PATHS.MOVIES.VIEW,
        element: <MoviePage />,
      },
      {
        path: PATHS.MOVIES.WATCHLIST,
        element: <WatchlistPage />,
      },
    ]
  }
];

export const AuthPages = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    )
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignupPage />
      </GuestGuard>
    )
  },
]

export const guestPages = [
  ...AuthPages,
  {
    path: "/",
    element: <Navigate to={PATHS.LOGIN} replace={true} />
  }
]

export const routes = [
  {
    path: "/",
    element: <Navigate to={PATHS.LOGIN} replace={true} />
  },
  ...adminPages,
  ...guestPages,
  ...userPages,
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <NotFoundPage />
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
]