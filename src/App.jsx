

import { useState } from 'react'
import First from './components/First/First'
import Menu from './components/Menu/Menu'

import "./app.css"


function App() {

  const [ theme , setTheme] = useState(false)

  return (
    <>
      <div className='main' style={ { backgroundColor : (theme ? "black" : "white") , height : "100%"} }>
        <First setcolor={setTheme} color={theme}/>
        <Menu color={theme} />
      </div>

    </>
  )
}

export default App
