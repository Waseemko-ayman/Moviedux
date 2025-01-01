import axios from "axios";
import { useReducer } from "react";

const initialState = {
  movies: [],
  movie: null,
  isLoading: false,
  error: null,
  message: "",
};

const API_ACTIONS = {
  SET_LOADING: "SET_LOADING",
  GET: "GET",
  GET_SINGLE: "GET_SINGLE",
  POST: "POST",
  PUT: "PUT",
  DEL: "DEL",
  ERROR: "ERROR",
};

const reduce = (state, action) => {
  switch (action.type) {
    case API_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case API_ACTIONS.GET:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case API_ACTIONS.GET_SINGLE:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };
    case API_ACTIONS.POST:
      return {
        ...state,
        isLoading: false,
        movies: [...state.movies, action.payload],
        message: "Success!",
      };
    case API_ACTIONS.PUT:
      return {
        ...state,
        isLoading: false,
        movies: state.movies.map((item) =>
          item.id === action.payload.id ? action.payload.movies : item
        ),
        message: "Success!",
      };
    case API_ACTIONS.DEL:
      return {
        ...state,
        isLoading: false,
        movies: state.movies.filter((item) => item.id !== action.payload),
        message: "Success!",
      };
    case API_ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useAPI = (url, config) => {
  const [state, dispatch] = useReducer(reduce, initialState);

  const get = async (getConfig) => {
    try {
      dispatch({
        type: API_ACTIONS.SET_LOADING,
      });
      const res = await axios.get(url, { ...config, ...getConfig });
      dispatch({ type: API_ACTIONS.GET, payload: res?.data });
    } catch (error) {
      console.error("Error fetching movies:", error);
      dispatch({
        type: API_ACTIONS.ERROR,
        payload: error,
      });
    }
  };

  const getSingle = async (id, getConfig) => {
    try {
      dispatch({
        type: API_ACTIONS.SET_LOADING,
      });
      const res = await axios.get(`${url}/${id}`, {
        ...config,
        ...getConfig,
      });
      dispatch({ type: API_ACTIONS.GET_SINGLE, payload: res?.data });
    } catch (error) {
      console.error("Error fetching movie:", error);
      dispatch({
        type: API_ACTIONS.ERROR,
        payload: error,
      });
    }
  };

  const post = async (body) => {
    try {
      dispatch({
        type: API_ACTIONS.SET_LOADING,
      });
      const res = await axios.post(url, body, config);
      dispatch({ type: API_ACTIONS.POST, payload: res.data });
    } catch (error) {
      console.error("Error adding movie:", error);
      dispatch({
        type: API_ACTIONS.ERROR,
        payload: error,
      });
    }
  };

  const put = async (id, body) => {
    try {
      dispatch({
        type: API_ACTIONS.SET_LOADING,
      });
      const res = await axios.put(`${url}/${id}`, body, config);
      dispatch({
        type: API_ACTIONS.PUT,
        payload: { id: body.id, movies: res.data },
      });
    } catch (error) {
      console.error("Error editing movie:", error);
      dispatch({
        type: API_ACTIONS.ERROR,
        payload: error,
      });
    }
  };

  const del = async (id) => {
    try {
      dispatch({
        type: API_ACTIONS.SET_LOADING,
      });
      await axios.delete(`${url}/${id}`, config);
      dispatch({ type: API_ACTIONS.DEL, payload: id });
    } catch (error) {
      console.error("Error deleting movie:", error);
      dispatch({
        type: API_ACTIONS.ERROR,
        payload: error,
      });
    }
  };

  return {
    ...state,
    get,
    getSingle,
    post,
    put,
    del,
  };
};

export default useAPI;
