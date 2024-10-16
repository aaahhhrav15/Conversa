import React from 'react';
import './login.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from "../../lib/firebase";
import { set } from 'firebase/database';
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';
import upload from '../../lib/upload';

const Login = () => {

  const [avatar, setAvatar] = useState(
    {
        file: null,
        url: ""
    }
  );

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if(e.target.files.length === 0) return;
    setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
    })
  }

    const handleRegister = async(e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const {username, email, password} = Object.fromEntries(formData);

        const imgUrl = await upload(avatar.file);

        try 
        {
            const user = await createUserWithEmailAndPassword(auth, email, password);

            await setDoc(doc(db, "users", user.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: user.user.uid,
                blocked:[],
            })
            await setDoc(doc(db, "userchat", user.user.uid), {
                chats : []
            })
            toast.success("Account created successfully");   
        }
        catch (error) 
        {
            console.log(error);
        }
        finally
        {
            setLoading(false);
        }
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        const {email, password} = Object.fromEntries(formData);
        try
        {
            await signInWithEmailAndPassword(auth, email, password);
        }
        catch (error)
        {
            console.log(error);
            toast.error("Invalid credentials");
        }
        finally
        {
            setLoading(false);
        }
    }

  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome Back</h2>
            <form action="" onSubmit={handleLogin}>
                <input type="email" placeholder='Email'  name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button disabled={loading}>{loading?"Loading":"Sign In"}</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create an Account</h2>
            <form action="" onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || "/avatar.png"} alt="" />
                    Upload an image
                </label>
                <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder='Username'  name='username'/>
                <input type="email" placeholder='email'  name='email'/>
                <input type="password" placeholder='password' name='password'/>
                <button disabled={loading} >{loading ? "Loading" : "Sign Up"}</button>
            </form>
        </div>
    </div>
  )
}

export default Login;