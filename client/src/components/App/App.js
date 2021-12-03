import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Login from '../Login/Login';
import { useReducer, useEffect } from 'react';
import { reducer } from '../../reducer/reducer';
import GlobalContext from '../../context/context'
import Registration from '../Registration/Registration';
import Logout from '../Logout/Logout';
import Game from '../Game/Game';
import { gameStore } from '../../context/gameStore';
import Statistics from '../Statistics/Statistics';

function App() {

  const initialValue = {
    gameStore,
    user: false,
  }

  const [state, dispatch] = useReducer(reducer, initialValue)


  useEffect(() => {
    fetch('http://localhost:5000/isauth', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          dispatch({ type: 'CHECK_SESSION', payload: data.user})
        }
      })
  }, []);


  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route> 

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route exact path="/registration">
            <Registration />
          </Route>

          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/stat">
            <Statistics />
          </Route>

          
        </Switch>

      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
