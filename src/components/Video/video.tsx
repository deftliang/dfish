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
  const progressbar = useRef<HTMLDivElement>(null)
  const volumebar = useRef<HTMLDivElement>(null)
  const cursorV = useRef<HTMLDivElement>(null)
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
        cursor.current.style.left = `calc(${xleft}% - 5px)`
      }
    }
  }

  // 进度条拖拽
  function handleCursorDrag(e: any) {
    let l = e.clientX - cursor.current!.offsetLeft
    setPlay(false)
    videoRef.current!.pause()
    document.onmousemove = function(e) {
      let needX = e.clientX - l
      let maxX = progressbar.current!.offsetWidth - 5
      needX = needX < -5 ? -5 : needX
      needX = needX > maxX ? maxX : needX
      cursor.current!.style.left = needX + 'px'
    }
    document.onmouseup = function() {
      videoRef.current!.currentTime = videoRef.current!.duration * (cursor.current!.offsetLeft + 5) / (progressbar.current!.offsetWidth)
      if (play === true) {
        setPlay(true)
        videoRef.current!.play()
      } else {
        setPlay(false)
        videoRef.current!.pause()
      }
      document.onmousemove = document.onmouseup = null
    }
    return false
  }

  // 音量进度条
  function handleCursorDragV(e: any) {
    let l = e.clientX - cursorV.current!.offsetLeft
    document.onmousemove = function(e) {
      let needX = e.clientX - l
      let maxX = volumebar.current!.offsetWidth - 5
      needX = needX < -5 ? -5 : needX
      needX = needX > maxX ? maxX : needX
      let v = (cursorV.current!.offsetLeft + 5) / volumebar.current!.offsetWidth
      cursorV.current!.style.left = needX + 'px'
      videoRef.current!.volume = v < 0 ? 0 : v
    }
    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null
    }
    return false
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
          <div className="playbtn pbtn" onClick={handlePlayClick}>
            <Icon icon="play" />
          </div>
        ) : (
          <div className="pausebtn pbtn" onClick={handlePauseClick}>
            <Icon icon="pause" />
          </div>
        )}
        <div className="progressbar" ref={progressbar}>
          <div className="cursor" onMouseDown={handleCursorDrag} ref={cursor}></div>
        </div>
        <div className="volumebar" ref={volumebar}>
          <div className="cursor" onMouseDown={handleCursorDragV} ref={cursorV}></div>
        </div>
      </div>
    </div>
  )
}

Video.defaultProps = {}

export default Video
