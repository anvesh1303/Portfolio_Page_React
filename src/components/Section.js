import React from "react";
import './styles/Section.scss';
import img1 from './Assets/img1.jpg'
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

const Section=()=>{
    return (
        <div>
            <Link to="/">
                <ArrowBack className="arrow"></ArrowBack>
            </Link>
        <div className="section">
            
            <div className="section_container"></div>
            <div className="section-img">
                <img src={img1} alt=""/>
            </div>

            <div className="section_cotent">
                <h1>Anvesh kumar Nallala</h1>
                <p>Experience in full stack development</p>
                <p>Java</p>
                <p>React</p>
                <p>MySQL</p>
            </div>
        </div>
        </div>
    )
}
export default Section