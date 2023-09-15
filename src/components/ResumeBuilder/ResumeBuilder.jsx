import React from 'react'
import { useNavigate  } from 'react-router-dom'





const ResumeBuilder = () => {

  const navigate = useNavigate()

  return (
    <>
      <button
        onClick={ ()=>{navigate("/")}}
        style={{ right: "5%" }}
        href='#'
        className='btn btn-outline-dark fw-bold position-absolute bottom-0'
      >Go Home</button>
    </>
  )
}

export default ResumeBuilder