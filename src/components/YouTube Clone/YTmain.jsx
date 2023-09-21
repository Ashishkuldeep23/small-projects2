import React, {  useState } from 'react'
import "./yt.css"

import VideoHolder from './VideoHolder'
import AddVideoForm from './AddVideoForm'



const YTmain = () => {

    const [input, setInput] = useState({ title: "", views: "" })
    const [onUpdate, setOnUpdate] = useState(false)


    // // // Data transfer from form to video components
    function sivlingDataTansfer(data) {
        // console.log(data)
        setInput(data)
        setOnUpdate(true)
    }



    return (
        <>
            <div id='yt_holder'>
                <AddVideoForm input={input} setInput={setInput} onUpdate={onUpdate} setOnUpdate={setOnUpdate} />
                <VideoHolder sivlingDataTansfer={sivlingDataTansfer} />
                <p className='mt-auto'> This is small clone of CRUD operations of Youtube. </p>
            </div>
        </>
    )
}

export default YTmain