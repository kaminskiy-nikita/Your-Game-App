import * as React from 'react';
import { Container, TextField, Box, Button } from '@mui/material';
import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import GlobalContext from '../../context/context';

const Login = () => {
  const { dispatch } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const body = {
      email: data.get('email'),
      password: data.get('password'),
    };

    fetch('http://localhost:5000/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
            <h3>Аутентифицируемся</h3>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="почта"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required={true}
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
export default Login;
