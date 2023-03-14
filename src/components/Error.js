import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Error({ message }) {
  return (
    <div>
        <AiOutlineCloseCircle />
        <div className='header'> There were some errors</div>
        <ul className='list'>
            <li>{message}</li>
        </ul>
    </div>
  )
}

export default Error