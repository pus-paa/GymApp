import React from 'react';

const ButtonOutline = ({ text }) => {
    return (
        <button type='button' className='btn px-5 py-1 font-medium outline-none border-2 border-gym-red rounded-sm text-2xl text-white hover:bg-gym-red hover:scale-105 transition-all ease-in'>
            {text}
        </button>
    )
}

export default ButtonOutline;