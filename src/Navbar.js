import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar () {
    return(
        <div className="navbar">
            <h2>LOGO</h2>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                 <li><Link to='/taskbar'>Task</Link></li>
                 <li><Link to='/user'>User</Link></li>
            </ul>
               
                 </div>
    )
}

export default Navbar