import React , {Component} from 'react';
import './LMenu.css';
import {
    NavLink, Route
} from "react-router-dom";
import svgThreeDots from './../../SVG/ThreeDots.svg';



class LMenu extends Component{

    constructor(props){
        super(props);
        this.state = { 
            classes : [],
            stateCode : 0,
        };
    }


   

    componentDidMount(){
        fetch('https://api.kunbr0.com/se104/classes.php')
            .then((response) => {
                return response.json();
            })


            .then((classes) => {
                console.log(classes);
                this.setState({
                    classes,
                    stateCode : 99
                });

                setTimeout(function() {
                    document.body.classList.add("loaded");
                }, 500);
            })
            
            .catch((error) => {
                this.setState({stateCode : -1});
        });

            
    }

    SelectMenu(menuName){
        let idKun = "section-" + menuName;
        if(document.getElementById(idKun)){
            document.getElementById(idKun).checked = "true";
        }
    }

    updateMenu(){
        let currentLocation = window.location.pathname.split('/')[1];
        switch(currentLocation){
            case "inbox": case "sent" : case "archive":    
                this.SelectMenu("personal");
                break;
            case "system": case "users": case "visitaion": 
                this.SelectMenu("usage");
                break;
            case "class": 
                this.SelectMenu("class");
                break;
            default:
                this.SelectMenu("homepage");
                break;
        }
    }

    
    
    render(){

        this.updateMenu();
        let elmMenuClasses = null;
        if(this.state.stateCode === 99){
            if(this.state.classes.length){
                elmMenuClasses = this.state.classes.map((kClass) => 
                    <NavLink key={kClass.classID} exact to={"/class/" + kClass.className} activeClassName="activeSubMenu"><li><i className="fa fa-star" /><span>{kClass.className}</span></li></NavLink>
                );
            }
        }
        return(
            
            <div className="left-menu">
                <div className="logo"><i className="fa fa-home" />
                    <div>This is a menu ^^</div>
                </div>

                <div className="accordion">
                    
                    <NavLink id="lmenu-elm"  to="/">
                    <div className="section">                      
                        <input type="radio" name="accordion-1" id="section-homepage" />
                        <label htmlFor="section-0"  onClick={()=>this.SelectMenu("homepage")} ><span>Homepage</span></label>                       
                    </div>
                    </NavLink>

                    
                    <div className="section">
                        <input type="radio" name="accordion-1" id="section-personal" />
                        <label htmlFor="section-1"  onClick={()=>this.SelectMenu("personal")} ><span>Personal</span></label>
                        <div className="content">
                            <ul>
                            <NavLink activeClassName="activeSubMenu" exact to="/inbox"><li><i className="fa fa-inbox" />Inbox</li></NavLink>
                            <NavLink activeClassName="activeSubMenu" exact to="/sent"><li><i className="fa fa-share" /><span>Sent</span></li></NavLink>
                            <NavLink activeClassName="activeSubMenu" exact to="/archive"><li><i className="fa fa-archive" /><span>Archive</span></li></NavLink>
                            </ul>
                        </div>
                    </div>
                    

                    <div className="section">
                        <input type="radio" name="accordion-1" id="section-usage"/>
                        <label htmlFor="section-2" onClick={()=>this.SelectMenu("usage")}> <span>Usage</span></label>
                        <div className="content">
                            <ul>
                            <NavLink activeClassName="activeSubMenu" exact to="/system"><li><i className="fa fa-cog" />System</li></NavLink>
                            <NavLink activeClassName="activeSubMenu" exact to="/users"><li><i className="fa fa-group" />Users</li></NavLink>
                            <NavLink activeClassName="activeSubMenu" exact to="/visitation"><li><i className="fa fa-sitemap" />Visitation</li></NavLink>

                            </ul>
                        </div>
                    </div>

                    <div className="section">
                        <input className="autoOverFlow" type="radio" name="accordion-1" id="section-class"/>
                        <label htmlFor="section-3" onClick={()=>this.SelectMenu("class")} > <span>Classes</span></label>
                        <div className="content">
                            <ul>
                                {elmMenuClasses}
                            
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
