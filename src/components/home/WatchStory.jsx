import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

const WatchStory=()=>{

    const [showVideo,setShowVideo]=useState(false);

    const youtubeVideoId='https://www.youtube.com/shorts/OiAoQBTEfhM';
    return(
        <div className="hero-star-div d-flex gap-3 align-items-center"
        style={{cursor:'pointer'}}
        onClick={()=>setShowVideo(true)}>
            <div className="hero-star-btn d-flex align-items-center justify-content-center">
                <FaPlay className="play-icon"/>
                <span className="story-text">Watch Our Story</span>
            </div>


            
        </div>
    )

}
export default WatchStory;