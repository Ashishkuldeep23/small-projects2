

import { useEffect, useState } from 'react'
import First from './components/First/First'
import Menu from './components/Menu/Menu'

import ResumeMain from './components/Resume/ResumeMain';
import Upload from './components/Upload/Upload';

import Prectice2 from './components/Pectice2/Prectice2';

import Calculator from './components/Calculator/Calculator';

import AllProjectShow from './components/All_project_Show/AllProjectShow';

import ListItemInterview from "./components/ListItemInterview/ListItemInterview"

import Precice3 from './components/Prectice3/Precice3';

import PersonalCard from "./components/personalCard/PersonalCard"

import ProgramingJokes from './components/ProgramingJokes/ProgramingJokes';

import Layout from './Layout';

import "./app.css"


function App() {

  const [theme, setTheme] = useState(false)

  return (
    <>

      <div id='app_main'>

        {/* Programing joks here */}
        <Layout > <ProgramingJokes /></Layout>

        {/* card prectice only , Not Used now.*/}
        {/* <Layout > <PersonalCard /></Layout> */}


        {/* All Section rapped into our Layout component */}
        <Layout bg="red" color="white" ><h1>Hello word , Just checking here layout worked or not.</h1></Layout>


        {/* Prectice  */}
        <Layout bg="yellow" > <ListItemInterview /> </Layout>



        {/* My new project all project show div -------> */}

        {/* <AllProjectShow /> */}


        {/* Prectice React and css and also js */}

        <Layout bg="pink" >
          <Precice3 />
        </Layout>


        <Layout bg="orange" >
          <Prectice2 />
        </Layout>

        {/* Not using prectce 1 now  */}


        {/* A mobile degine nav bar on topn in desktop and below in mobiles  */}

        <Layout >
          <div className='main' style={{ backgroundColor: (theme ? "black" : "white"), height: "100%" }}>
            <First setcolor={setTheme} color={theme} />
            <Menu color={theme} />
          </div>
        </Layout>




        {/* Calculator ui ------------> */}

        {/* <Calculator /> */}


        {/* Resume UI code here ---------------> */}

        <Layout bg='lightyellow'>

          <ResumeMain />
        </Layout>

        <Layout bg='yellow'>
          <Upload />
        </Layout>


      </div>

    </>
  )
}

export default App
