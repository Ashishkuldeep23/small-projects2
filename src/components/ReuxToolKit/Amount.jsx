import React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { increment, decrement, incrementByNumber } from "../Slices/amountSlice"
import { useState } from 'react'


const Amount = () => {


    // const num = 5

    const [num, setNum] = useState(0)

    const account = useSelector(state => state.account.amount)

    const dispatch = useDispatch()


    return (
        <>

            <div className='border border-warning rounded p-1 text-center  my-2 ms-sm-5'>
                <h2>Account Component</h2>
                <h4>Amount : {account}</h4>
                <div>
                    <button
                        className='m-1  bg-info fw-bold px-1 rounded text-white'
                        onClick={() => dispatch(decrement())}
                    >DECREMENT</button>
                    <button
                        className='m-1 fw-bold px-1 rounded bg-info text-white '
                        onClick={() => dispatch(increment())}
                    >INCREMENT</button>

                </div>

                <div>
                    <input
                        className='m-1 fw-bold px-1 rounded w-50'
                        type="number"
                        value={num}
                        onChange={(e) => { setNum(+e.target.value) }}
                    />
                    <button
                        className='m-1 fw-bold px-1 rounded bg-info text-white'

                        onClick={() => { dispatch(incrementByNumber({ newValue: num })); }}
                    >Add</button>
                </div>

            </div>


        </>
    )
}

export default Amount