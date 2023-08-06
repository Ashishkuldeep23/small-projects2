

import { useState } from 'react'
import First from './components/First/First'
import Menu from './components/Menu/Menu'

import ResumeMain from './components/Resume/ResumeMain';
import Upload from './components/Upload/Upload';

import Prectice1 from './components/Prectice1/Prectice1';
import Prectice2 from './components/Pectice2/Prectice2';

import Calculator from './components/Calculator/Calculator';

import "./app.css"


function App() {

  const [ theme , setTheme] = useState(false)

  return (
    <>
      <div className='main' style={ { backgroundColor : (theme ? "black" : "white") , height : "100%"} }>
        <First setcolor={setTheme} color={theme}/>
        <Menu color={theme} />
      </div>



      {/* Prectice React and css and also js */}

      <Prectice2 />

      <Prectice1/>



      
      {/* Calculator ui ------------> */}

      <Calculator />

      
      {/* Resume UI code here ---------------> */}

      <ResumeMain />

      <Upload />



    </>
  )
}

export default App
