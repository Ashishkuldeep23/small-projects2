import React, { useEffect, useState } from 'react'


import { Link } from 'react-router-dom'

const tabArr = ["joke", "calculator", "prectice", "layout", "ques", "mobile", "resume", "TtoS" , "uplaod"]



const HeaderNavBar = () => {


    const [currentTab, setCurrentTab] = useState(1)



    useEffect( ()=>{


        // // // Below all code is written for tab set also when user refresh the page.


        // console.log(window)
        // console.log(window.location.hash)

        // let pathName = window.location.pathname

        let hashName = window.location.hash    // // // By this way , i can get hast path of url

        let actualNameOfHash = hashName.slice(2)   // // // TakeOut Actual path from hash path (I'm slicing from 2 becoz i know 0 and first charactors --> that is --> #\)
        // console.log(hashName.slice(2))

        let indexWherePath = tabArr.indexOf(actualNameOfHash)   // // // Search the path name in our array of pathnames , (if -1 means first path that is joke div , if getting value othenThen -1 , that is index value , set this other index value by adding 1 becoz i use in jsx.)

        // console.log(indexWherePath)
        
        if(indexWherePath === -1){
            setCurrentTab(1)
        }else{
            setCurrentTab(indexWherePath+1)
        }

    }  , [])
    
    

    return (
        <>

            <nav

                className="navbar navbar-expand-lg bg-body-tertiary w-100"
            >
                <div className="container-fluid align-items-start">

                    <div >
                        <a
                            id='header_heading'
                            style={{ fontFamily: 'cursive' }}
                            className="navbar-brand"
                            href="#"
                        >Mix <span className='d-none d-sm-inline'>Project</span> IInd</a>
                    </div>


                    <div>
                        <button className="navbar-toggler w-100 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                {
                                    tabArr.map((ele, i) => {

                                        return (
                                            <li key={i} className={"nav-item mx-2  my-1  text-center px-1 border border-warning fw-bold rounded" + (currentTab === i + 1 ? " bg-primary " : "")} >
                                                <Link
                                                    to={`/${ele === "joke" ? "" : ele}`}
                                                    className={"nav-link text-capitalize" + (currentTab === i + 1 ? " text-white " : "")}
                                                    aria-current="page"
                                                    href="#"
                                                    onClick={() => { setCurrentTab(i + 1) }}

                                                >{ele}</Link>
                                            </li>
                                        )
                                    })
                                }



                                {/* <li className="nav-item mx-2 my-1 text-center px-1 border border-warning fw-bold rounded ">
                                    <a className="nav-link text-capitalize" href="#">Link</a>
                                </li>
                                <li className="nav-item mx-2  my-1  text-center px-1 border border-warning fw-bold rounded ">
                                    <a className="nav-link text-capitalize" href="#">About</a>
                                </li>
                                <li className="nav-item mx-2  my-1  text-center px-1 border border-warning fw-bold rounded ">
                                    <a className="nav-link text-capitalize" href="#">Home</a>
                                </li> */}


                            </ul>
                        </div>

                    </div>

                </div>
            </nav>


        </>
    )
}

export default HeaderNavBar