import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './DropDown.css'

function DropDown() {
    const [navLinks, setNavLinks] = useState(false);
   return (
      <div className="dropdown">
              {!navLinks?(
                  <button
                   onClick={()=>setNavLinks(true)}
                   type="button"
                   className="btn btn-white dropdown-toggle"
                   data-bs-toggle="dropdown"
                   data-bs-display="static"
                   aria-expanded="false"
                 >
                   DropDown
                 </button>
              ):(
                  <button
                onClick={()=>setNavLinks(false)}
                type="button"
                className="btn btn-white dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                DropDown
              </button>
              )} 
                {navLinks?(
                      <div className="buttons">
                          <Link to='/drop1'  onClick={()=>setNavLinks(false)} ><p>firstDrop</p></Link> 
                          <Link to='/drop2' onClick={()=>setNavLinks(false)}><p>secondtDrop</p></Link>
                     </div>
                  ):(
                      null
                  )}
                     
               
         
              
      </div>
    );
}

export default DropDown