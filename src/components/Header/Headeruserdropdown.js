import React from "react";
const Headeruserdropdown = ({isVisible}) => {
    return(
        <>
            {isVisible && <div className="user-dropdown">
                <ul>
                    <li> <a href="">Update Details</a></li>
                    <li> <a href="">Diagnostic Tool</a></li>
                    <li> <a href="">Installer Tool</a></li>
                    <li> <a href="">Logout</a></li>
                </ul>
            </div>}
        </>
    )
}

export default Headeruserdropdown;