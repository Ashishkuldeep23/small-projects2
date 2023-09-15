import React, { useState } from 'react'

import "./AppointmentAssignment.css"

import Client from './Client'
import Admin from './Admin'


const AppointmentAssignment = () => {

  const [isAdmin, setIsAdmin] = useState(false)


  return (
    <>
      {
        isAdmin
          ? <Admin />
          : <Client />
      }

    </>
  )
}

export default AppointmentAssignment