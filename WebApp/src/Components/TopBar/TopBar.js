import React from 'react';
import './TopBar.css';
import './MTopBar.css';

const TopBar = () => {

    const logout = () => {
        localStorage.removeItem("userData");
        window.location.reload();
    }

    return(
        
        <div id="topbar-wrapper">
            <div id="topbar-institutionDetails">
            Sở giáo dục và đạo tạo TPHCM<br/>
            Trường THPT Nguyễn Văn A<br/>
            </div>

            <div id="topbar-userDetails">
                <div id="topbar-userDisplayName"></div>
                <button onClick={logout}>Logout</button>
            </div>
            
        </div>
    );
    
}

export default TopBar;
