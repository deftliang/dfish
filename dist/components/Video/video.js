import React, { useRef, useState } from 'react';
import Icon from '../Icon';
import './_style.scss';
var Video = function (props) {
    var src = props.src, width = props.width, height = props.height, poster = props.poster;
    var videoRef = useRef(null);
    var cursor = useRef(null);
    var progressbar = useRef(null);
    var volumebar = useRef(null);
    var cursorV = useRef(null);
    var _a = useState(false), play = _a[0], setPlay = _a[1];
    function handlePlayClick() {
        if (videoRef.current) {
            videoRef.current.play();
            setPlay(true);
        }
    }
    function handlePauseClick() {
        if (videoRef.current) {
            videoRef.current.pause();
            setPlay(false);
        }
    }
    function handleTimeUpdate() {
        if (videoRef.current) {
            var xleft = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            if (cursor.current) {
                cursor.current.style.left = "calc(" + xleft + "% - 5px)";
            }
        }
    }
    // 进度条拖拽
    function handleCursorDrag(e) {
        var l = e.clientX - cursor.current.offsetLeft;
        setPlay(false);
        videoRef.current.pause();
        document.onmousemove = function (e) {
            var needX = e.clientX - l;
            var maxX = progressbar.current.offsetWidth - 5;
            needX = needX < -5 ? -5 : needX;
            needX = needX > maxX ? maxX : needX;
            cursor.current.style.left = needX + 'px';
        };
        document.onmouseup = function () {
            videoRef.current.currentTime = videoRef.current.duration * (cursor.current.offsetLeft + 5) / (progressbar.current.offsetWidth);
            if (play === true) {
                setPlay(true);
                videoRef.current.play();
            }
            else {
                setPlay(false);
                videoRef.current.pause();
            }
            document.onmousemove = document.onmouseup = null;
        };
        return false;
    }
    // 音量进度条
    function handleCursorDragV(e) {
        var l = e.clientX - cursorV.current.offsetLeft;
        document.onmousemove = function (e) {
            var needX = e.clientX - l;
            var maxX = volumebar.current.offsetWidth - 5;
            needX = needX < -5 ? -5 : needX;
            needX = needX > maxX ? maxX : needX;
            var v = (cursorV.current.offsetLeft + 5) / volumebar.current.offsetWidth;
            cursorV.current.style.left = needX + 'px';
            videoRef.current.volume = v < 0 ? 0 : v;
        };
        document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
        };
        return false;
    }
    return (React.createElement("div", { className: "video-wrapper" },
        React.createElement("video", { className: "video", width: width + "px", height: height + "px", ref: videoRef, poster: poster, onTimeUpdate: handleTimeUpdate },
            React.createElement("source", { src: src, type: "video/mp4" })),
        React.createElement("div", { className: "controls" },
            !play ? (React.createElement("div", { className: "playbtn pbtn", onClick: handlePlayClick },
                React.createElement(Icon, { icon: "play" }))) : (React.createElement("div", { className: "pausebtn pbtn", onClick: handlePauseClick },
                React.createElement(Icon, { icon: "pause" }))),
            React.createElement("div", { className: "progressbar", ref: progressbar },
                React.createElement("div", { className: "cursor", onMouseDown: handleCursorDrag, ref: cursor })),
            React.createElement("div", { className: "volumebar", ref: volumebar },
                React.createElement("div", { className: "cursor", onMouseDown: handleCursorDragV, ref: cursorV })))));
};
Video.defaultProps = {};
export default Video;
