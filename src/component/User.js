import React,{useState,useEffect} from 'react'
import './User.css'
import { auth } from '../firebase';
import {useHistory} from 'react-router-dom'

function User () {
    const [show, setShow] = useState(false)
    const [user,setUser] = useState()

    const history = useHistory()
     
    useEffect(()=>{
         auth.onAuthStateChanged(authUser =>{
            console.log('THE USER IS >>>', authUser.email);
            setUser(authUser.email)
         })
    })
    const handleAuthenticaton = () => {
       history.push('/')
      }
    
    return(
        <div className="user">
            <div className="field">
                {show?(
                    <div className="inputs">
                   <p>username  {user}</p>
                   <p>Password:<input type="password" /></p>
                   </div>
                ):(
                  <div className="inputs">
                        <p>Username{user}</p>
                        <p>Password</p><input type="password" />
                  </div>
                )

                }
          
            </div>
        <div className="button">
            {show?(
                <button>save password</button>
            ):(
                <button onClick={()=>setShow(true)}>Change password</button>
            )
            }
            
            <button onClick={handleAuthenticaton}>logout</button>
        </div>
        </div>
    )
}

export default User;