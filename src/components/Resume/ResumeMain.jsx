import React from 'react'
import "./resume.css"

import { useState } from 'react'


const ResumeMain = () => {

  const [darkMode, setDarkMode] = useState(false)

  return (

    <>

      <button className='dark' style={{backgroundColor : (darkMode?"lightcyan":"black") , color : (darkMode ? "black" : "white")}} onClick={ ()=>{setDarkMode(!darkMode)} }>{darkMode ? "Ligth" : "Dark"}</button>


      <div className='resumeMain' style={ {backgroundColor : (darkMode ? "black" : "white") , color:(darkMode ? "white" : "black")} }>

        <div className="left"  style={{backgroundColor : (darkMode ? "#0f2c2c" :"darkslategrey") }}>

          

          <div className="profilePic"></div>
          <h2 style={{textAlign:"center"}}>Ashish Kuldeep</h2>

          <div className="contentLeft">

            <div className='contact'>

              <h3>Contect</h3>
              <hr />

              <h5>Phone</h5>
              <p>XXX-XXX-XXXX</p>
              <h5>Email</h5>
              <p>@@@@@@@@@@@@@</p>
              <h5>Address</h5>
              <p>London Nagar</p>

            </div>

            <div className="education">

              <h3>Education</h3>
              <hr />
              <p>2015</p>
              <h4>High school</h4>
              <h5>University/College</h5>
              <p>2017</p>
              <h4>Intermediate</h4>
              <h5>University/College</h5>

              <p>2020</p>
              <h4>B.sc</h4>
              <h5>University/College</h5>


            </div>


            <div className="expertise">

              <h3>Expertise</h3>
              <hr />

              <ul>
                <li>Web Dev</li>
                <li>MERN</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
              </ul>

            </div>


            <div className="language">
              <h3>Language</h3>
              <hr />
              <h5>English</h5>
              <h5>Hindi</h5>


            </div>


          </div>


        </div>

        <div className="right">

          <div className="intro">
            <h1>Ashish Kuldeep</h1>
            <h4>Web Developer</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque placeat dicta minima voluptatibus? Suscipit.</p>
          </div>

          <div className="projects">
            <h3>Projects</h3>
            <hr />
            <ul>
              <li>
                <strong>Todo</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium sed similique dignissimos nobis ipsam. Quas mollitia iusto consectetur unde dolor.</p>
              </li>
              <li>
                <strong>Mix React forntend</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium sed similique dignissimos nobis ipsam. Quas mollitia iusto consectetur unde dolor.</p>
              </li>
              <li>
                <strong>Online Food Delivery</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium sed similique dignissimos nobis ipsam. Quas mollitia iusto consectetur unde dolor.</p>
              </li>
              <li>
                <strong>Online Chatting</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium sed similique dignissimos nobis ipsam. Quas mollitia iusto consectetur unde dolor.</p>
              </li>

            </ul>
            <h5>All Projects:- <a href="">Visit to see all projects</a></h5>
          </div>

          <div className="experience">

            <h3>Experience</h3>
            <hr />
            <h5>Nothing for now</h5>
          </div>


          <div className="reference">

            <h3>Reference</h3>
            <hr />
            <h5>Nothing for now</h5>
          </div>

        </div>

      </div>
    </>

  )
}

export default ResumeMain