import React from 'react';
import './TopBar.css';
import './MTopBar.css';

const TopBar = () => {

    const logout = () => {
        localStorage.removeItem("userData");
        window.location.reload();
    }

    return(
        
        <div id="topbar-wrapper" className="d-flex justify-content-between align-items-center">
            <div id="topbar-institutionDetails">
            Sở giáo dục và đạo tạo TPHCM<br/>
            Trường THPT Nguyễn Văn A<br/>
            </div>

            <div id="topbar-userDetails" className="d-flex" style={{margin: "right"}}>
                <div id="topbar-userDisplayName">Test</div>
                <button onClick={logout} style={{height: "45px"}}>Logout</button>
            </div>
            
        </div>
    );
    
}

export default TopBar;
