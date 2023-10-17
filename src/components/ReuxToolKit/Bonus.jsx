import React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { increment , incrementByNumber } from "../Slices/bonusSlice"


const Bonus = () => {


    const bonus = useSelector(state => state.bonus.point)

    const dispatch = useDispatch()

    return (
        <>

            <div className='border border-success rounded p-1 text-center my-2 ms-sm-5'>
                <h2>Bonus Component</h2>

                <h4>Bonus : {bonus}</h4>
                <div>

                    <button 
                    className='m-1 fw-bold px-1 rounded bg-info text-white '

                    onClick={ ()=>{dispatch(increment())} }
                    >INCREMENT</button>
                    {/* <button className='m-1  bg-info text-white'>DECREMENT</button> */}
                </div>

                <div>

                    <button 
                    className='m-1 fw-bold px-1 rounded bg-info text-white '
                    
                        onClick={ ()=>{ dispatch(incrementByNumber(7)) } }
                    >INCREMENT by 7</button>
                    {/* 
                    <input className='m-1 fw-bold px-1 rounded ' type="text" />
                    <button className='m-1 fw-bold px-1 rounded bg-info text-white'>Add</button> */}

                </div>

            </div>



        </>
    )
}

export default Bonus