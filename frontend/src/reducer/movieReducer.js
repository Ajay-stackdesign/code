import {
    CLEAR_ERRORS,
    MOVIE_ALL_FAIL,
    MOVIE_ALL_REQUEST,
    MOVIE_ALL_SUCCESS,
    MOVIE_CREATE_FAIL,
    MOVIE_CREATE_REQUEST,
    MOVIE_CREATE_RESET,
    MOVIE_CREATE_SUCCESS
} from "../constants/movieConstants";


export const movieGetreducer = (state = { movie: [] }, action) => {
    switch (action.type) {
        case MOVIE_ALL_REQUEST:
            return {
                ...state,
                loading: true,
                movie: []
            }
        case MOVIE_ALL_SUCCESS:
            return {
                loading: false,
                movie: action.payload.movie
            }
        case MOVIE_ALL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }

}

export const movieCreateReducer = (state = { movie: {} }, action) => {
    switch (action.type) {
        case MOVIE_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case MOVIE_CREATE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                movie: action.payload.movie
            }
        case MOVIE_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case MOVIE_CREATE_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}
