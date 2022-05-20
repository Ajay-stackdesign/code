import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <button><Link to="/movie/get">Click to See the movies details</Link></button>
        </Fragment>
    )
}

export default Home