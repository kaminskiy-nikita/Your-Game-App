import * as React from 'react';
import styles from './Registration.css'
import { Container, TextField, Box, Button } from '@mui/material';
import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import GlobalContext from '../../context/context';

const Registration = () => {
  const { dispatch } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target.username.value, event.target.email, event.target.password);
    const data = new FormData(event.currentTarget);
    const body = {
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    };

    fetch('http://localhost:5000/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'CHECK_SESSION', payload: data.user});
        history.push('/game');
      })
  }
  return (
    <div style={{ backgroundColor: 'white', height: '100vh'}}>
    <Container component="main" maxWidth="xs">
      <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <h3>Регистрируемся</h3>
          <Box component="form" onSubmit={onSubmit} validate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="имя"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="почта"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="пароль"
            name="password"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Готово
          </Button>
        </Box>
      </Box>

    </Container>
    </div>
  )
}
export default Registration;
