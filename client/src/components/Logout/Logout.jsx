import React from 'react'
import { useContext } from 'react';
import GlobalContext from '../../context/context';
import { useHistory } from "react-router-dom";


const Logout = () => {
  const { dispatch } = useContext(GlobalContext);
  let history = useHistory();

  fetch('http://localhost:5000/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'CHECK_SESSION', payload: data.isUserAuth});
        history.push("/");
      })
  
  return (
    <div>
      
    </div>
  )
}

export default Logout
