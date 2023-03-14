import React from 'react'

function Data({ data }) {


    return (
    <div className='ui-card' >
        <div className='content'>
            <a className='header'>{data.name}</a>
            <div className='description'>Temperature : {data.main.temp}</div>
            <div className='description'>
                Description : {data.weather[0].description}
            </div>
        </div>
    </div>
    )
}

export default Data