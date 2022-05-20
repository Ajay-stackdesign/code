import {
    MOVIE_ALL_SUCCESS,
    MOVIE_ALL_REQUEST,
    MOVIE_ALL_FAIL,
    MOVIE_CREATE_REQUEST,
    MOVIE_CREATE_SUCCESS,
    MOVIE_CREATE_FAIL,
    CLEAR_ERRORS
} from "../constants/movieConstants";
import axios from "axios"

export const getMovie = () => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_ALL_REQUEST })

        const { data } = await axios.get("/api/v1/movie/get")

        dispatch({
            type: MOVIE_ALL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MOVIE_ALL_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const createMovie = (productData) => async (dispatch) => {
    try {
        dispatch({ type: MOVIE_CREATE_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.post(
            `/api/v1/movie`,
            productData,
            config
        );
        // console.log(data)

        dispatch({
            type: MOVIE_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: MOVIE_CREATE_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}