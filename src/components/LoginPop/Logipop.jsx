import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../../assets/db'
function Logipop({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />
          }
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuning, i agree to the terms of use & privacy policy.</p>
        </div>
        {
          currState==="Sign Up"
          ?<p>Already have account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
          :<p>Create a new acoount? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        }
      </form>
    </div>
  )
}

export default Logipop
