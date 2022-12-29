import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate()
  return (
    <div className="container my-5">
        <h3 style={{marginLeft:400}}>Thank you for your order success!!!</h3>
        <button onClick={()=> navigate('/')} className="w-10 btn btn-primary btn-lg">Home</button>
    </div>
  )
}

export default ThankYou