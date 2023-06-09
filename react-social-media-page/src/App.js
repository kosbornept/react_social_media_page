import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [contentType, setContentType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
      .then(response => response.json())
      .then(json => setItems(json))

    return () => {

    }
  }, [contentType])

  return (
    <div>
      <h1 style={{
        textAlign: 'center'
      }}>React App to show example API calls to comments, friends and posts.</h1>
      <div className='userButtonsBox'>
        <ul>
          <li key="posts">
            <button onClick={() => setContentType('posts')}>
              Posts
            </button>
          </li>
          <li key="comments">
            <button onClick={() => setContentType('comments')}>
              Comments
            </button>
          </li>
          <li key="friends">
            <button onClick={() => setContentType('users')}>
              Friends
            </button>
          </li>
        </ul>
      </div>
      <div className='contentTitle'>
        <h1>
          {contentType}
        </h1>
        <div className='contentBox'>
          {items.map(item => {
            return (
              <div className='usersBox'>
                <h2>{contentType === 'users' ? item.name : item.title}</h2>
                <h3>{contentType === 'users' ? item.email : item.name}</h3>
                <h4>{item.website}</h4>
                <p>{item.body}</p>
              </div>
            )
          })}  
        </div>
      </div>
    </div>
  )
}

export default App;
