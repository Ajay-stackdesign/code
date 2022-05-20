import React from 'react'

const Movies = ({ item }) => {
    return (
        <div className='movies'>
            <div>
                <h2>{item.name}</h2>
                <h3>{item.rating}</h3>
                <h3>{item.released_date}</h3>
            </div>
        </div>
    )
}

export default Movies