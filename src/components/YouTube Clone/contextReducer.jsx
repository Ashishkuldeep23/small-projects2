

import React , {createContext, useContext, useReducer} from "react";


import videosDB from "./videosInDB";





function videoReducer(state, action) {

    switch (action.type) {


        case "ADD":
            return [...state, { ...action.payload }]

        case "DELETE":
            let newVideoData = state.filter((vdeo) => { return vdeo.id != action.payload })
            return newVideoData

        case "UPDATE":

            // console.log(action.payload)

            let index = state.findIndex(v => v.id === action.payload.id)

            // console.log(index)

            let newVideoDataUpadte = [...state]
            newVideoDataUpadte.splice(index, 1, action.payload)

            return newVideoDataUpadte
        default:
            return state

    }


}


const VideoState = createContext(null)
const VideoDispatch = createContext(null)


const YTCloneCompoent = ({children}) =>{

    const [videoData, dispatch] = useReducer(videoReducer, videosDB)

    return(
        <VideoDispatch.Provider value={dispatch}>
            <VideoState.Provider value={videoData}>
                {children}
            </VideoState.Provider>
        </VideoDispatch.Provider> 
    )

}



const useVideoData = () => useContext(VideoState)
const useVideoDispatch = () => useContext(VideoDispatch)


export {YTCloneCompoent , useVideoData , useVideoDispatch} 


