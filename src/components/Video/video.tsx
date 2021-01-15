import React, { FC, RefObject, useRef, useState } from 'react'
import Icon from '../Icon'
import './_style.scss'

interface VideoProps {
  src: string
  width?: number
  height?: number
  poster?: string
}

const Video: FC<VideoProps> = (props) => {
  const { src, width, height, poster } = props
  const videoRef: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null)
  const cursor = useRef<HTMLDivElement>(null)
  const [play, setPlay] = useState(false)

  function handlePlayClick() {
    if (videoRef.current) {
      videoRef.current.play()
      setPlay(true)
    }
  }

  function handlePauseClick() {
    if (videoRef.current) {
      videoRef.current.pause()
      setPlay(false)
    }
  }

  function handleTimeUpdate() {
    if (videoRef.current) {
      let xleft = (videoRef.current.currentTime / videoRef.current.duration) * 100
      if (cursor.current) {
        cursor.current.style.left = `${xleft}%`
      }
    }
  }

  return (
    <div className="video-wrapper">
      <video
        className="video"
        width={`${width}px`}
        height={`${height}px`}
        ref={videoRef}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="controls">
        {!play ? (
          <div className="playbtn" onClick={handlePlayClick}>
            <Icon icon="play" />
          </div>
        ) : (
          <div className="pausebtn" onClick={handlePauseClick}>
            <Icon icon="pause" />
          </div>
        )}
        <div className="progressbar">
          <div className="cursor" ref={cursor}></div>
        </div>
      </div>
    </div>
  )
}

Video.defaultProps = {}

export default Video
