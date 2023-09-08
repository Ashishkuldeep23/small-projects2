import React, { useEffect, useState } from 'react'


import "./text_to_speech_div.css"


const TextToSpeech = () => {



    const [userInput, setUserInput] = useState({ lang: "en-US", voice: "", text: "The quick brown fox jumps over the lazy dog" })

    const [allLangs, setAllLanges] = useState([])

    const [allVoices, setAllVoices] = useState({})





    function onChangeHandler(e) {
        // console.log(e)

        e.isDefaultPrevented()
        e.isPropagationStopped()

        setUserInput({ ...userInput, [e.target.name]: e.target.value })

    }

    function getLanuages( ){
        alert("Not working , Api limit Over");
    }

    useEffect(() => {

        getLanuages()

    }, [])




    return (
        <>

            <div className='rounded border border-danger p-1' id='text_to_speech_div'>


                <div className='rounded border border-danger p-1 h-100 text-center d-flex flex-column align-items-center'>

                    <h4>Convert Text to Speech</h4>

                    <label className='w-100 text-start fs-5' htmlFor="lang">Languase ⬇️</label>
                    <select onChange={onChangeHandler} className='w-100 mb-2' name="lang" id="lang">

                        {

                            (allLangs && allLangs.length > 0 ) &&

                            allLangs.map((el, i) => {
                                return <option key={i} value={el?.language_code} >{el?.language_name}</option>
                            })
                        }

                        {/* 
                        <option value="hn">Hindi</option>
                        <option value="hn">Hindi</option>
                        <option value="hn">Hindi</option>
                        <option value="hn">Hindi</option> */}

                    </select>



                    <label className='w-100 text-start fs-5' htmlFor="voice">Voice ⬇️</label>
                    <select onChange={onChangeHandler} className='w-100 mb-2' name="voice" id="voice">
                        <option value="male">male</option>
                        <option value="female">Female</option>
                    </select>

                    <label className='w-100 text-start fs-5' htmlFor="text">Yout Text ⬇️</label>
                    <textarea onChange={onChangeHandler} value={userInput.text} className='w-100 mb-2' name="text" id="text" cols="30" rows="7"></textarea>


                    <button className='me-auto ms-2 ms-md-auto me-md-2 p-1 btn btn-outline-success'>Get Voice</button>

                </div>



            </div>

        </>
    )
}

export default TextToSpeech