import React from 'react'

import "./calculator.css"

function Calculator() {
    return (
        <div className='calculator_main border  border-3 border-dark my-5 d-flex flex-column justify-content-center align-items-center'>

                <h1>Postponded</h1>

            <div className='cal_box border border-warning p-2 rounded rounded-3 ' >



                <div className='w-100 '>

                    Name Division

                </div>
                <div className='w-100 '>
                    Input Show Div

                </div>
                <div className='w-100 '>
                    Previous inputs

                </div>
                <div className='w-100  d-grid'>

                    <div className='btn_row row m-0'>

                        <div className='col-3 '>Reset</div>
                        <div className='col-3 '>Back</div>
                        <div className='col-3 '>{"<-"}</div>
                        <div className='col-3 '>+</div>


                    </div>

                    <div className='btn_row row m-0 '>

                        <div className='col-3 '>1</div>
                        <div className='col-3 '>2</div>
                        <div className='col-3 '>3</div>
                        <div className='col-3 '>-</div>


                    </div>

                    <div className='btn_row row m-0 '>

                        <div className='col-3 '>4</div>
                        <div className='col-3 '>5</div>
                        <div className='col-3 '>6</div>
                        <div className='col-3 '>*</div>


                    </div>

                    <div className='btn_row row m-0'>

                        <div className='col-3 '>7</div>
                        <div className='col-3 '>8</div>
                        <div className='col-3 '>9</div>
                        <div className='col-3 '>/</div>


                    </div>
                    
                    <div className='btn_row row m-0 '>

                        <div className='col-3 '>0</div>
                        <div className='col-3 '>.</div>
                        {/* <div className='col-3 '>9</div> */}
                        <div className='col-6 '>=</div>


                    </div>


                </div>


            </div>


        </div>
    )
}

export default Calculator