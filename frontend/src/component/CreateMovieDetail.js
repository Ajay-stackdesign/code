import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, createMovie } from '../action/movieAction'
import "./CreateMovieDetail.scss"

const CreateMovieDetail = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()

    const { error, loading, success } = useSelector((state) => state.movieCreate)
    const [name, setName] = useState("")
    const [rating, setRating] = useState()
    const [released_date, setReleased_date] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createMovie({ name, rating, released_date }))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (success) {
            alert.success("Movie added successFully")
            navigate("/movie/get")
        }
    }, [alert, dispatch, error, navigate, success])
    return (
        <Fragment>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <center>Enter Name</center>
                    <input className='text' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <center>Enter Name</center>
                    <input className='text' type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
                </div>
                <div>
                    <center>Enter Name</center>
                    <input className='date' type="date" value={released_date} onChange={(e) => setReleased_date(e.target.value)} />
                </div>
                <button
                    id="createProductBtn"
                    type="submit"
                    disabled={loading ? true : false}
                >
                    Create
                </button>
            </form>
        </Fragment>
    )
}

export default CreateMovieDetail