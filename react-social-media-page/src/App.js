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
      <div className='userButtonsBox'>
        <ul>
          <li>
            <button onClick={() => setContentType('posts')}>
              Posts
            </button>
          </li>
          <li>
            <button onClick={() => setContentType('comments')}>
              Comments
            </button>
          </li>
          <li>
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
