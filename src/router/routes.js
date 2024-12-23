import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";
import MoviesPage from "../pages/MoviesPage";
import WatchlistPage from "../pages/WatchlistPage";
import MoviePage from "../pages/MoviePage";
import * as T from "../components/organism/Typography";

export const adminPages = (role) => [
  [...routes]
]

export const routes = [
  {
    path: PATHS.MOVIES.ROOT,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <MoviesPage />
      },
      {
        path: PATHS.MOVIES.VIEW,
        element: <MoviePage />
      }
    ]
  },
  {
    path: PATHS.WATCHLIST.ROOT,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <WatchlistPage />
      },
      {
        path: PATHS.WATCHLIST.VIEW,
        element: <MoviePage />
      }
    ]
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <T.H1>No Page</T.H1>
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
]