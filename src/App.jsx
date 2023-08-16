

import { useState } from 'react'
import First from './components/First/First'
import Menu from './components/Menu/Menu'

import ResumeMain from './components/Resume/ResumeMain';
import Upload from './components/Upload/Upload';

import Prectice1 from './components/Prectice1/Prectice1';
import Prectice2 from './components/Pectice2/Prectice2';

import Calculator from './components/Calculator/Calculator';

import AllProjectShow from './components/All_project_Show/AllProjectShow';

import ListItemInterview from "./components/ListItemInterview/ListItemInterview"

import Precice3 from './components/Prectice3/Precice3';

import "./app.css"


function App() {

  const [ theme , setTheme] = useState(false)

  return (
    <>

      {/* Prectice  */}

      <ListItemInterview />


      {/* My new project all project show div -------> */}

      {/* <AllProjectShow /> */}


      {/* Prectice React and css and also js */}

      <Precice3 />


      <Prectice2 />

      <Prectice1/>


      {/* A mobile degine nav bar on topn in desktop and below in mobiles  */}
    
      <div className='main' style={ { backgroundColor : (theme ? "black" : "white") , height : "100%"} }>
        <First setcolor={setTheme} color={theme}/>
        <Menu color={theme} />
      </div>



      
      {/* Calculator ui ------------> */}

      <Calculator />

      
      {/* Resume UI code here ---------------> */}

      <ResumeMain />

      <Upload />



    </>
  )
}

export default App
