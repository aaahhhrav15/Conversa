import React from 'react';
import './detail.css';
import { auth } from '../../lib/firebase';

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h2>Aarav Lodha</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
           <div className="photoItem">
             <div className="photoDetail">
               <img src="./avatar.png" alt="" />
               <span>photo_2024_2.png</span>
             </div>
             <img src="/download.png" alt="" className='icon'/>
           </div>
           <div className="photoItem">
             <div className="photoDetail">
               <img src="./avatar.png" alt="" />
               <span>photo_2024_2.png</span>
             </div>
             <img src="/download.png" alt="" className='icon' />
           </div>
           <div className="photoItem">
             <div className="photoDetail">
               <img src="./avatar.png" alt="" />
               <span>photo_2024_2.png</span>
             </div>
             <img src="/download.png" alt=""  className='icon'/>
           </div>
           <div className="photoItem">
             <div className="photoDetail">
               <img src="./avatar.png" alt="" />
               <span>photo_2024_2.png</span>
             </div>
             <img src="/download.png" alt="" className='icon' />
           </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={()=> auth.signOut()}>Log out</button>
      </div>
    </div>
  )
}

export default Detail;