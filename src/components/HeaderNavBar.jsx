import React, { useState } from 'react'


import { Link } from 'react-router-dom'

const tabArr = ["joke", "calculator", "prectice", "layout", "ques", "mobile", "resume", "uplaod"]


const HeaderNavBar = () => {


    const [currentTab, setCurrentTab] = useState(1)

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