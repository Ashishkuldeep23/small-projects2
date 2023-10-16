

import React, { useState } from 'react'


import { useSelector, useDispatch } from "react-redux"

import { incNumber, decNumber } from "../actions/index"


const ReduxUseInReact = () => {


    const myState = useSelector((state) => state.numberReduer)

    const dispatch = useDispatch()

    const [num, setNum] = useState(JSON.parse(localStorage.getItem("setNumber")) | 1)


    return (
        <>


            <div className='text-center border border-warning border-2 p-3 rounded '>

                <h1>Going to use Redux In React project</h1>
                <h2>Increment and Decrement number</h2>


                <div className='d-flex justify-content-center align-items-center '>

                    <input
                        className='border-success fw-bold px-1 rounded-start w-25'
                        type="number" name="" id=""
                        onChange={(e) => { setNum(e.target.value); }}
                        value={num}
                    />

                    <button
                        className='bg-success text-white fw-bold px-1 rounded-end'
                        onClick={() => {
                            setNum(1); localStorage.setItem("setNumber", JSON.stringify(num))
                        }}
                    >Set Number</button>

                </div>


                <div className='d-flex justify-content-center align-items-center '>
                    <button
                        className='py-1 px-2 rounded mx-1 bg-success text-white fw-bold '
                        onClick={() => { dispatch(decNumber(JSON.parse(localStorage.getItem("setNumber")) | 1)) }}
                    >-</button>
                    <h3 className='py-1 px-2 mx-1 fw-bold '>{myState}</h3>
                    <button
                        className='py-1 px-2 rounded mx-1 bg-success text-white fw-bold '
                        onClick={() => { dispatch(incNumber(JSON.parse(localStorage.getItem("setNumber")) | 1)) }}
                    >+</button>
                </div>

            </div>

        </>
    )
}

export default ReduxUseInReact

