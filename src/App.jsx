

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

import TextToSpeech from './components/TextToSpeech/TextToSpeech';

import HeaderNavBar from './HeaderNavBar';

import AppointmentAssignment from './components/AppointmentAssignment/AppointmentAssignment';

import ReactMasterAssignments from './components/ReactMasterAssignments/ReactMasterAssignments';

import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder';

import YTmain from './components/YouTube Clone/YTmain';


import ReduxUseInReact from './components/ReduxUse/ReduxUseInReact';

import Layout from './Layout';

import { Route, Routes } from 'react-router-dom';

import "./app.css"

import { YTCloneCompoent } from './components/YouTube Clone/contextReducer';


function App() {

  const [theme, setTheme] = useState(false)

  return (
    <>

      <div id='app_main'>



        {/* Header div this ---------> */}
        <Layout
          height='10vh'
          className='my-0 rounded p-0 position-fixed top-0'
          bg='lightcyan'
          zIndex='1000'
        >
          <HeaderNavBar />
        </Layout>



        <Routes>

          {/* Programing joks here */}
          <Route path='/' element={<Layout layoutFor="Joke Div" > <ProgramingJokes /></Layout>} />

          {/* AppointmentAssignment */}
          <Route path='/appoint' element={<Layout > <AppointmentAssignment /></Layout>} />


          {/* ReactMasterAssignments */}
          <Route path='/raectM' element={<Layout layoutFor="React Master class Prectice" bg='lightgreen' > <ReactMasterAssignments /></Layout>} />

          {/* ResumeBuilder */}
          <Route path='/ResumeBuilder' element={<Layout layoutFor='Resume Builder' > <ResumeBuilder /></Layout>} />

          {/* YouTube prectice Div */}
          <Route path='/YT' element={
            <Layout layoutFor='Youtube' className='bg-dark text-white' >

              <YTCloneCompoent>
                <YTmain />

              </YTCloneCompoent>
            </Layout>
          } />


          {/* card prectice only , Not Used now.*/}
          {/* <Layout > <PersonalCard /></Layout> */}



          <Route path='/calculator' element={<Layout layoutFor="Calculator" bg="orange" ><Prectice2 /></Layout>} />


          <Route path='/redux' element={<Layout layoutFor="Use Redux" bg="lightyellow" ><ReduxUseInReact /></Layout>} />


          {/* Prectice React and css and also js */}
          <Route path='/prectice' element={<Layout layoutFor="For Prectice Only" bg="pink" > <Precice3 /> </Layout>} />



          {/* Text To Speech div */}
          <Route path='/TtoS' element={<Layout layoutFor="Text To Speech" > <TextToSpeech /> </Layout>} />







          {/* Not using prectce 1 now  */}


          {/* All Section rapped into our Layout component */}
          <Route path='/layout' element={<><Layout layoutFor='Just Checking Layout' bg="red" color="white" ><h1>Hello word , Just checking here layout worked or not.</h1></Layout></>} />




          {/* Prectice  */}
          <Route path='/ques' element={<Layout layoutFor='A ReactJS Question (Incomplete)' bg="yellow" > <ListItemInterview /> </Layout>} />




          {/* My new project all project show div -------> */}

          {/* <AllProjectShow /> */}



          {/* A mobile degine nav bar on topn in desktop and below in mobiles  */}

          <Route path='/mobile' element={<>
            <Layout >
              <div
                className='main'
                style={{
                  backgroundColor: (theme ? "black" : "white"),
                  height: "100%",
                  position: "relative"
                }}
              >
                <First setcolor={setTheme} color={theme} />
                <Menu color={theme} />
              </div>
            </Layout></>} />





          {/* Calculator ui ------------> */}

          {/* <Calculator /> */}


          {/* Resume UI code here ---------------> */}

          <Route path='/resume' element={<>
            <Layout layoutFor='My Resume' bg='lightyellow'>
              <ResumeMain />
            </Layout>
          </>} />



          <Route path='/uplaod' element={<>
            <Layout layoutFor='Upload Image (Incomplete)' bg='yellow'>
              <Upload />
            </Layout>
          </>} />



        </Routes>

      </div>

    </>
  )
}

export default App
