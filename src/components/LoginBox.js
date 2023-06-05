import React from 'react'
import './LoginBox.css';

function LoginBox() {
  return (
    <div className='box'>
      <div className='headline'> <span>Login</span> </div>
      <div className='form'>
        <form className='myform' action=''>
          <div className='sub-box'>
            <label for='username'>Username</label>
            <br />
            <input id='username' name='username' />
            <br />
          </div>

          <div className='sub-box'>
            <label for='password'>Password</label>
            <br />
            <input id='password' type='password' name='password' />
            <br />
            <div className='forgot-password'><a href=''>forgot password</a></div>
          </div>
          <div className='button-box'>
            <input type='submit' id='inputbutton' value="Login" />
            <span> Don't have an account yet? </span>
            <span className='register'>
              <a href=''>Register</a>
            </span>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginBox