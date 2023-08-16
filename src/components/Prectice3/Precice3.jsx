import React, { useEffect, useRef } from 'react'
import "./prectice3.css"

import InputPrec3 from './inputPrec3'

const Precice3 = () => {


  const inputPassFocuse =  useRef(null)


  useEffect( ()=>{

    inputPassFocuse.current.focus()
  } , [] )

  return (
    <>
      <div className="calculator_main d-flex justify-content-center flex-column align-items-center border border-3 border-danger my-3">

        <h5 className='px-5 w-75'>Here i created multiple loaders & d-flex flex-warp with flex (on child tag) & effect on Hover of btn & Gworing bottom border on hover & And using  React.forwardRef() function to give refrance in child component see the second input code. </h5>

        <div className='d-flex flex-wrap'>

          <div className='load_box' id='loader1'></div>
          <div className='load_box' id='loader2'></div>
          <div className='load_box' id='loader3'></div>
          <div className='load_box' id='loader3_2nd'></div>
          <div className='load_box' id='loader4'></div>
          <div className='load_box' id='loader5'></div>

        </div>

        <div className='prec3 border'>
          <input type="text" />

          <InputPrec3  ref={inputPassFocuse} />
     
          <button>Submit</button>

        </div>

          <a href="#grow_botto_border" id='grow_botto_border'>Hover</a>

      </div>


    </>
  )
}

export default Precice3