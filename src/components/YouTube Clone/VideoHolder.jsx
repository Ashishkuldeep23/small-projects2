import React, { useContext } from 'react'

import "./yt.css"
import Video from './video'

import ThemeColor from '../../contexData'


const VideoHolder = ( {videoData , dispatch , sivlingDataTansfer } ) => {

    const theme = useContext(ThemeColor)    // // // By this way we can use context data.

    console.log({theme})


    return (
        <>
            <div>
                {
                    videoData && videoData.map((el , i) => {

                        return <Video key={el.id} sivlingDataTansfer={sivlingDataTansfer} el={el} dispatch={dispatch} />

                    })
                }

            </div>


        </>
    )
}

export default VideoHolder