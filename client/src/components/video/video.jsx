import React from 'react'
import { videoStyles } from './video.module.scss'

const VideoComponent = ({ videoSrcURL, videoTitle, ...props }) => {
    return (
        <div {...props} >
            <iframe
                src={videoSrcURL}
                title={videoTitle}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
            />
        </div>
    )
}

export default VideoComponent