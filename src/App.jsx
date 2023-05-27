

import { useState } from 'react'
import First from './components/First/First'
import Menu from './components/Menu/Menu'

import ResumeMain from './components/Resume/ResumeMain'

import "./app.css"


function App() {

  const [ theme , setTheme] = useState(false)

  return (
    <>
      <div className='main' style={ { backgroundColor : (theme ? "black" : "white") , height : "100%"} }>
        <First setcolor={setTheme} color={theme}/>
        <Menu color={theme} />
      </div>


      {/* Resume UI code here ---------------> */}

      <ResumeMain />

    </>
  )
}

export default App
