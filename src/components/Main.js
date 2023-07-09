import React from "react";
import "./styles/Main.scss"
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import img2 from './Assets/img2.jpg'
const Main = () =>{
    return(
        <div className="main">
            <div className="main_container">
                <div className="main_content">
                    <div className="text">
                        <p>Hello Everyone</p>
                        <h1>I am Anvesh</h1>
                        <p>Full stack developer</p>

                        <div className="icons">
                            <Twitter className="icon"/>
                            <Instagram className="icon"/>
                            <Facebook className="icon"/>
                            <LinkedIn className="icon"/>
                        </div>
                        <div className="buttons">
                            <button>See Me</button>
                            <button>Hire Me</button>
                        </div>

                    </div>
                </div>
                <div className="main_img">
                    <img src={img2} alt="" width={190} height={190}/>
                </div>
            </div>
        </div>
    )
}

export default Main