import React , {Component} from 'react';
import './LMenu.css';
import {
    Link
} from "react-router-dom";
import svgThreeDots from './../../SVG/ThreeDots.svg';

class LMenu extends Component{
    render(){
        return(
            
            <div className="left-menu">
                <div className="logo"><i className="fa fa-home" />
                    <div>This is a menu ^^</div>
                </div>

                <div className="accordion">
                    <div className="section">
                        <input type="radio" name="accordion-1" id="section-1" defaultChecked="checked" />
                        <label htmlFor="section-1"><span>Personal</span></label>
                        <div className="content">
                            <ul>
                            <li><i className="fa fa-inbox" /><span>Inbox</span></li>
                            <li><i className="fa fa-share" /><span>Sent  </span></li>
                            <li><i className="fa fa-archive" /><span>Archive</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <input type="radio" name="accordion-1" id="section-2" defaultValue="toggle" />
                        <label htmlFor="section-2"> <span>Usage</span></label>
                        <div className="content">
                            <ul>
                            <li><i className="fa fa-cog" /><span>System</span></li>
                            <li><i className="fa fa-group" /><span>Users  </span></li>
                            <li><i className="fa fa-sitemap" /><span>Visitation</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <input type="radio" name="accordion-1" id="section-3" defaultValue="toggle" />
                        <label htmlFor="section-3"> <span>Classes</span></label>
                        <div className="content">
                            <ul>
                            <li><i className="fa fa-star" /><span>10C6</span></li>
                            <li><i className="fa fa-star" /><span>10C8 </span></li>
                            <li><i className="fa fa-star" /><span>11B2</span></li>
                            <li><i className="fa fa-star" /><span>11B4</span></li>
                            <li><i className="fa fa-star" /><span>11B15</span></li>
                            <li><i className="fa fa-star" /><span>12A6</span></li>
                            <li><i className="fa fa-star" /><span>12A9  </span></li>
                            <li><i className="fa fa-star" /><span>12A11</span></li>
                            <li><i className="fa fa-star" /><span>12A20</span></li>
                            
                            </ul>
                        </div>
                    </div>

                    <div className="section">
                    <input type="radio" name="accordion-1" id="section-4" defaultValue="toggle" />
                    <label htmlFor="section-4"> <span>Section 4</span></label>
                    <div className="content" />
                    </div>
                    </div>
            </div>
        );
    }
}

export default LMenu;
