import React, { useContext } from 'react'

import "./yt.css"
import Video from './video'

import ThemeColor from '../../contexData'
import { useVideoData } from './contextReducer'


const VideoHolder = ({sivlingDataTansfer }) => {

    const theme = useContext(ThemeColor)    // // // By this way we can use context data.
    // console.log({theme})

    const videoData = useVideoData()

    return (
        <>
            <div className='d-flex justify-content-center'>
                {(videoData && (videoData.length > 0))

                    ? videoData.map((el, i) => {

                        return <Video key={el.id} i={i} sivlingDataTansfer={sivlingDataTansfer} el={el}/>

                    })

                    : <h2>Add video by form.☝️</h2>
                }

            </div>


        </>
    )
}

export default VideoHolder