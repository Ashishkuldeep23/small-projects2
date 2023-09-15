import React, { useReducer, useState } from 'react'

import "./yt.css"

import VideoHolder from './VideoHolder'
import AddVideoForm from './AddVideoForm'



let videosDB = [
    {
        id: '1',
        title: "Pathaan",
        creator: "YRF",
        views: "100K",

    },
    {
        id: '2',
        title: "Jawan",
        creator: "RCF",
        views: "200K",

    },
    {
        id: '3',
        title: "Danki",
        creator: "RHF",
        views: "250K",

    },

]



const YTmain = () => {


    function videoReducer(state , action){

        switch(action.type){


            case "ADD" :
                return [ ...state , { ...action.payload } ]

            case "DELETE":
                let newVideoData = state.filter( (vdeo)=>{return vdeo.id != action.payload} )
                return newVideoData

            case "UPDATE":

                // console.log(action.payload)
                
                let index = state.findIndex(v => v.id === action.payload.id)

                // console.log(index)

                let newVideoDataUpadte = [...state]
                newVideoDataUpadte.splice( index , 1 , action.payload )

                return newVideoDataUpadte
            default:
                return state

        }

        
    }
    const [videoData , dispatch] = useReducer( videoReducer , videosDB )


    const [input, setInput] = useState({ title: "", views: "" })
    const [onUpdate , setOnUpdate] = useState(false)


    function sivlingDataTansfer(data){
        // console.log(data)
        setInput(data)
        setOnUpdate(true)
    }



    return (
        <>

            <div id='yt_holder'>

                <AddVideoForm videoData={videoData} dispatch={dispatch} input={input} setInput={setInput} onUpdate={onUpdate} setOnUpdate={setOnUpdate}/>
                <VideoHolder sivlingDataTansfer={sivlingDataTansfer} videoData={videoData} dispatch={dispatch} />

            </div>

        </>
    )
}

export default YTmain