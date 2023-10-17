

import React from 'react'

import Amount from './Amount'
import Bonus from './Bonus'


import { useSelector  } from "react-redux"




const RTK = () => {


    const amount = useSelector( state => state.account.amount )

    const bouns = useSelector( state => state.bonus.point )

    // console.log(bouns)
    

  return (
    <>

            <div className='border border-danger border-2 rounded p-2'>

                    <h3>Current Amount : {amount}</h3>
                    <h3>Total Bouns : {bouns}</h3>

                    <Amount></Amount>
                    <Bonus></Bonus>


            </div>

    
    </>
  )
}

export default RTK

