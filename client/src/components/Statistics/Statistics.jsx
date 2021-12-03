import React, { useState, useEffect } from 'react'

const Statistics = () => {

  const [users, setUsers ] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5000/result', {
      method: 'GET',
      credentials: 'include',
     });

     const data = await response.json();
     setUsers(data.users);
    })();

  }, []);
  
  
  return (
    <div className='container pt-6' style={{ backgroundColor: 'white', height: '100vh', color: '#1D4E89'}}>
      {users.length && 
      
        <ol>
          {users.sort((a, b) => b.result - a.result).map((user) => <li style={{ fontSize: '2rem'}} key={user.id}>Имя: {user.username}, количество очков: {user.result}</li>)}
        </ol>
      }
      <div>

      </div>
    </div>
  )
}

export default Statistics
