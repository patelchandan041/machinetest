import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'
 import { auth }  from '../firebase'
 import './Login.css'

function Login() {
    const history = useHistory();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const signIn = e =>{
         e.preventDefault();

         auth
         .signInWithEmailAndPassword(email,password)
         .then(auth => {
             history.push('/home')
         })
         .catch(error => alert(error.message))
     }

     const register = e =>{
         e.preventDefault();

         auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
             if (auth) {
                 history.push('/')
             }
         })
         .catch(error => alert(error.message))

         //do some fancy firebase register shit
     }

    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className='login__logo'
            src='amazone.png' alt='' />
            </Link>
            
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e =>setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password'  value={password} onChange={e => setPassword(e.target.value)} />

                    <button
                    type='submit'
                    onClick={signIn}
                    className='login__signInButton' >
                        Sign-In</button>
                </form>
               

                    <button onClick={register}
                    className='login__registerButton'
                    >Create your account</button>
                </div>
                
                

        </div>
    )
}

export default Login