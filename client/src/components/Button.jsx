import React from 'react';

const Button = ({text}) => {
  return (
    <button className='btn px-5 py-1 font-medium outline-none border border-gym-red rounded-sm text-2xl text-white bg-gym-red transition-all ease-in hover:bg-gym-red-dark hover:scale-105'>
        {text}
    </button>
  )
}

export default Button;