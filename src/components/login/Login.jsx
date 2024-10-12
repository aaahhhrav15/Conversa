import React from 'react';
import './login.css';
import { useState } from 'react';

const Login = () => {

  const [avatar, setAvatar] = useState(
    {
        file: null,
        url: ""
    }
  );

  const handleAvatar = (e) => {
    if(e.target.files.length === 0) return;
    setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
    })
  }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    }

  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome Back</h2>
            <form action="" onSubmit={handleLogin}>
                <input type="email" placeholder='Email'  name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create an Account</h2>
            <form action="">
                <label htmlFor="file">
                    <img src={avatar.url || "/avatar.png"} alt="" />
                    Upload an image
                </label>
                <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder='Username'  name='username'/>
                <input type="email" placeholder='email'  name='email'/>
                <input type="password" placeholder='password' name='password'/>
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login;