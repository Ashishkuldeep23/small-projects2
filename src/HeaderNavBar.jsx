import React, { useEffect, useRef, useState } from 'react'


import { Link } from 'react-router-dom'

const tabArr = ["joke" , "raectM" , "ResumeBuilder" , "YT" , "appoint", "calculator", "prectice", "layout", "ques", "mobile", "resume"]


const HeaderNavBar = () => {

    const [currentTab, setCurrentTab] = useState(1)
    
    let headerRefrance = useRef(null)



    function handleScrool(ref) {

        // console.log(ref)

        // // // Refrance of div is given in parameter.

        window.scrollTo({
            top: ref.current.offsetTop,
            left: 0,
            behavior: "smooth"
        })
    }



    useEffect( ()=>{

        let hashEndPoint = window.location.hash 
        let actualEndPoint = hashEndPoint.slice( 2 )
        // console.log(actualEndPoint)

        let indexOfThatValue = tabArr.indexOf(actualEndPoint)

        
        if( indexOfThatValue !== -1) setCurrentTab(indexOfThatValue+1)
        else setCurrentTab(1)  // // Set of one , because 1 is default.
        
        // console.log(indexOfThatValue)



    } , [])


    return (
        <>

            <nav

                className="navbar navbar-expand-lg bg-body-tertiary w-100"
            >
                <div className="container-fluid align-items-start">

                    <div ref={headerRefrance}>
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
                                            <li key={i} className={"nav-item m-1  text-center px-1 border border-warning fw-bold rounded" + (currentTab === i + 1 ? " bg-primary " : "")} >
                                                <Link
                                                    to={`/${(ele === "joke") ? "" : ele}`}
                                                    className={"nav-link text-capitalize" + (currentTab === i + 1 ? " text-white " : "")}
                                                    aria-current="page"
                                                    href="#"
                                                    onClick={() => {
                                                        setCurrentTab(i + 1);  // // // Set current tab visiability


                                                        // handleScrool(headerRefrance)  // // // Calling an predefined fn to scrool the page , but i'm scrolling by only btn then i can write one line for that.

                                                        window.scrollTo( 0 , headerRefrance.current?.offsetTop , "smooth" )
                                                    }}

                                                >{ele}</Link>
                                            </li>
                                        )
                                    })
                                }

                                <li
                                    className=" d-lg-none nav-item mx-2 my-1 text-center px-1 border border-warning border-2 bg-danger  fw-bold rounded "

                                    // // // below two attribute is needed to close menu box , by bootstrap.
                                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                >
                                    <a className="nav-link text-capitalize text-white" href="#">Close</a>
                                </li>



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