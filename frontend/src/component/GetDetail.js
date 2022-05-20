import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getMovie } from '../action/movieAction'
import Movies from "./Movies.js"
import "./GetDetail.scss"

const GetDetail = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const { error, loading, movie } = useSelector((state) => state.movie)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getMovie())
    }, [alert, dispatch, error])
    return (
        <Fragment>
            {loading ? "something went wrong" : (
                <Fragment>
                    <Fragment>
                        {movie
                            && movie.map((item) => (
                                <Movies key={item._id} item={item} />
                            ))}
                    </Fragment>
                </Fragment>
            )}
        </Fragment>
    )
}

export default GetDetail