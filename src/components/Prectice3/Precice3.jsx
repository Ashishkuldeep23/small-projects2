import React, { useEffect, useRef } from 'react'
import "./prectice3.css"

import InputPrec3 from './InputPrec3'

const Precice3 = () => {


  const inputPassFocuse = useRef(null)


  useEffect(() => {

    inputPassFocuse.current.focus()
  }, [])

  return (
    <>
      {/* No longer need rapper now  becaouse using layout component*/}
      {/* <div className="calculator_main d-flex justify-content-center flex-column align-items-center border border-3 border-danger my-3"> */}

      <h5 className='py-2 w-75'>Here i created multiple loaders & d-flex flex-warp with flex (on child tag) & effect on Hover of btn & Gworing bottom border on hover & And using  React.forwardRef() function to give refrance in child component see the second input code. </h5>

      <div className='d-flex flex-wrap justify-content-center'>

        <div className='load_box' id='loader1'></div>
        <div className='load_box' id='loader2'></div>
        <div className='load_box' id='loader3'></div>
        <div className='load_box' id='loader3_2nd'></div>
        <div className='load_box' id='loader4'></div>
        <div className='load_box' id='loader5'></div>

      </div>


      <div className='d-flex flex-wrap align-items-center justify-content-center'>
        <div className='load_box' id='loader6'></div>
        <div className='load_box d-flex justify-content-center align-items-center' id='loaderTY1'><div></div></div>

        <div className='load_box d-flex justify-content-center align-items-center' id='loaderTY2'><div><div></div></div></div>


        <div className='d-flex justify-content-center align-items-center' id='loaderTY3'></div>

        <div className='d-flex justify-content-center align-items-center' id='loaderTY4'>

          <div className='div1'></div>
          <div className='div2'></div>

        </div>

      </div>

      <div className='prec3 border'>
        <h5 className='w-100 text-center'>Testing forword ref in this code</h5>


        <input type="text" />

        <InputPrec3 ref={inputPassFocuse} />

        <button>Submit</button>

      </div>

      <a href="#grow_botto_border" id='grow_botto_border'>Hover on Me</a>


      <h2 className='d-flex mx-2'>Hey , I'm  <span id='typingAnimation'> Ashish Kuldeep</span></h2>
      <p>Check the code of typing Animation ( width = characters = steps() in animation ) (All are same) </p>




      <div id='btn_hover'>

        <button>Click</button>

      </div>


      {/* </div> */}


    </>
  )
}

export default Precice3