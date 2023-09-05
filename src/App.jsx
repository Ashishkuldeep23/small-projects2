

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


        <Layout height='10vh' >

          <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
            <div className="container-fluid">

              <div >
                <a className="navbar-brand" href="#">Mix <span className='d-none d-sm-inline'>Project</span> IInd</a>

              </div>


              <div>



                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2 border border-warning fw-bold rounded ">
                      <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item mx-2 border border-warning fw-bold rounded ">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item mx-2 border border-warning fw-bold rounded ">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item mx-2 border border-warning fw-bold rounded ">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </nav>



        </Layout>


        {/* Programing joks here */}
        <Layout layoutFor="Joke Div" > <ProgramingJokes /></Layout>

        {/* card prectice only , Not Used now.*/}
        {/* <Layout > <PersonalCard /></Layout> */}


        {/* Prectice React and css and also js */}


        <Layout layoutFor="Calculator" bg="orange" >
          <Prectice2 />
        </Layout>

        <Layout layoutFor="For Prectice Only" bg="pink" >
          <Precice3 />
        </Layout>



        {/* Not using prectce 1 now  */}


        {/* All Section rapped into our Layout component */}
        <Layout layoutFor='Just Checking Layout' bg="red" color="white" ><h1>Hello word , Just checking here layout worked or not.</h1></Layout>


        {/* Prectice  */}
        <Layout layoutFor='A ReactJS Question (Incomplete)' bg="yellow" > <ListItemInterview /> </Layout>



        {/* My new project all project show div -------> */}

        {/* <AllProjectShow /> */}



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

        <Layout layoutFor='My Resume' bg='lightyellow'>
          <ResumeMain />
        </Layout>

        <Layout layoutFor='Upload Image (Incomplete)' bg='yellow'>
          <Upload />
        </Layout>


      </div>

    </>
  )
}

export default App
