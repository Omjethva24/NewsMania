import React from 'react'
import loding from '../loading-waiting.gif'

const Spinner = () => {

    return (
        <div className='text-center my-3'>
            <img src={loding} style={{ width: '3rem' }}></img>
        </div>
    )
}

export default Spinner