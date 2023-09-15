import React from 'react'

import "./yt.css"
import Video from './video'


const VideoHolder = ( {videoData , dispatch , sivlingDataTansfer } ) => {


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