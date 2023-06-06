import React from 'react'
import './LoginBox.css';
import { useRef } from 'react';

function LoginBox() {
  const Password = useRef(null);
  const Username = useRef(null);

  const userHandler = (e)=>{
    if(!RegExp(/^.*@publicissapient.com$/i).test(e.target.value )){
      Username.current.setCustomValidity("use your Publicis Sapient email id");
    }
    else{
      Username.current.setCustomValidity("");
    }
  }

  const passwordHandler = (e)=>{
    if(e.target.value.length<8){
      Password.current.setCustomValidity("min 8 characters are required");
    }
    else if(!RegExp(/[A-Z]/).test(e.target.value )){
      Password.current.setCustomValidity("Password must contain a uppercase character");
    }
    else if(!RegExp(/\d/).test(e.target.value )){
      Password.current.setCustomValidity("Password must contain a digit between 0-9");
    }
    else if(!RegExp(/[!@#$%^&*()_+{}:"<>?,./;\\\|]/).test(e.target.value )){
      Password.current.setCustomValidity("Password must contain some special characters");
    }
    else{
      Password.current.setCustomValidity("");
    }
  }

  return (
    <div className='box'>
      <div className='headline'> <span>Login</span> </div>
      <div className='form'>
        <form className='myform' action=''>
          <div className='sub-box'>
            <label htmlFor='username'>Username</label>
            <br />
            <input id='username' name='username'type='email' autofocus="autofocus" required onChange={userHandler} ref={Username}/>
            <br />
          </div>

          <div className='sub-box'>
            <label htmlFor='password'>Password</label>
            <br />
            <input id='password' type='password' name='password' required onChange={passwordHandler} ref={Password}/>
            <br />
            <div className='forgot-password'><a href='' aria-label='Click here if you forgot your password'>forgot password</a></div>
          </div>
          <div className='button-box'>
            <input type='submit' id='inputbutton' value="Login" aria-label='click here to login' />
            <span> Don't have an account yet? </span>
            <span className='register'>
              <a href='' aria-label='Click here to Register as a new user'>Register</a>
            </span>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginBox