import axios from 'axios';
import React, { useContext, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import CurrentUserContext from '../contexts/CurrentUser';
import IUser from '../interfaces/IUser';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const navigate: NavigateFunction = useNavigate();

  const { setId, setAdmin, setFirstname } = useContext(CurrentUserContext);

  function redirectHome() {
    navigate('/');
  }

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post<IUser>(
        'http://localhost:8000/api/login',
        { email, password },
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      )
      .then((response) => response.data)
      .then((data) => {
        setErrorMessage('');
        setId(data.id);
        setFirstname(data.firstname);
        setAdmin(data.admin === 1);
        redirectHome();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setErrorMessage('Email ou mot de passe incorrect');
        } else {
          setErrorMessage(err);
        }
      });
  };

  return (
    <>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => login(e)}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          value={email}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          value={password}
        />
        <input className="button" type="submit" value="Login" />
        {errorMessage && <span>{errorMessage}</span>}
      </form>
    </>
  );
};

export default Login;
