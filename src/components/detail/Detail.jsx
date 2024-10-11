import React from 'react';
import './detail.css';

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h2>Aarav Lodha</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum sequi similique nulla maxime ullam incidunt tempore.</p>
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
             <img src="/download.png" alt="" />
           </div>
           <div className="photoItem">
             <div className="photoDetail">
               <img src="./avatar.png" alt="" />
               <span>photo_2024_2.png</span>
             </div>
             <img src="/download.png" alt="" />
           </div>
           <div className="photoItem">
             <div className="photoDetail">
               <img src="./avatar.png" alt="" />
               <span>photo_2024_2.png</span>
             </div>
             <img src="/download.png" alt="" />
           </div>
           <div className="photoItem">
             <div className="photoDetail">
               <img src="./avatar.png" alt="" />
               <span>photo_2024_2.png</span>
             </div>
             <img src="/download.png" alt="" />
           </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;