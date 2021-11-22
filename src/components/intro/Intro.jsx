import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Technical Product Manager"]
        })
    },[])

    return (
        <div className="intro" id="intro" >
            <div className="left">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Sherry Zheng</h1>
                    <h3>Freelance <span ref={textRef} ></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down" />
                </a>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/avatar.png" alt="Sherry" />
                </div>
            </div>
        </div>
    )
}