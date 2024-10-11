import React from 'react';
import './chat.css';
import EmojiPicker, { Emoji } from 'emoji-picker-react';
import { useState } from 'react';

const Chat = () => {

  const [open , setOpen] = useState(false);
  const [text, setText] = useState('');

  const handleEmoji = (e) => {
    setText(text + e.emoji);
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Aarav</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="icons">
            <img src="/more.png" alt="" />
            <img src="/video.png" alt="" />
            <img src="/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium!</p>
            <span>1 minute ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium!</p>
            <span>1 minute ago </span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium!</p>
            <span>1 minute ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium!</p>
            <span>1 minute ago </span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium!</p>
            <span>1 minute ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="/avatar.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium!</p>
            <span>1 minute ago </span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
            <img src="/img.png" alt="" />
            <img src="/camera.png" alt="" />
            <img src="/mic.png" alt="" />
        </div>
        <input 
          type="text" 
          placeholder='Type a message...'  
          value={text}
          onChange={(e)=> setText(e.target.value)}/>
        <div className="emoji">
          <img src="/emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className='send'>Send</button>
      </div>
    </div>
  )
}

export default Chat;