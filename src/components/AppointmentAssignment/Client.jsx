import React, { useState } from 'react'


import "./AppointmentAssignment.css"


const Client = () => {

    const [isLoginedUser, setIsLoginedUser] = useState(false)


    const currenttime = () => {

        let date = new Date()

        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`

    }



    return (
        <>

            <div className='border p-1 p-sm-3 rounded rounded-4 w-50 my-2'>
                <h1>Register</h1>
                <h1>Login</h1>

            </div>

            <div className='border p-1 p-sm-3 rounded rounded-4 w-50 my-2'>

                <h2 className='text-center'>You are on Falana Doctor panel</h2>
                <p className='text-center'>Current Date & Time is : {currenttime()}</p>



                <form className='d-flex flex-column align-items-center'>

                    <label className='w-75 fs-5' htmlFor="appointment" >Appointment Time</label>
                    <input className='w-75 mb-2' type="datetime-local" name="" id="appointment" />

                    <label className='w-75 fs-5' htmlFor="name">Name</label>
                    <input className='w-75 mb-2' type="text" placeholder='Name' id='name' />

                    <label className='w-75 fs-5' htmlFor="email">Email</label>
                    <input className='w-75 mb-2' type="email" name="" id="email" placeholder='Email' />

                    <label className='w-75 fs-5' htmlFor="Phone">Phone</label>
                    <input className='w-75 mb-2' type="number" name="" id="Phone" placeholder='Phone' />

                    <label className='w-75 fs-5' htmlFor="Purpose">Purpose</label>
                    <input className='w-75 mb-2' type="text" placeholder='Purpose' id='Purpose' />

                    <button> {isLoginedUser ? "Submit" : "Log In"} </button>

                </form>


            </div>




        </>
    )
}

export default Client