import { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const request = new Request('https://mydomain.com/authenticate', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem('auth', JSON.stringify(auth));
      })
      .catch(() => {
        throw new Error('Network error');
      });
  },
  checkAuth: () => {
    // Required for the authentication to work
    return Promise.resolve();
  },
  getPermissions: () => {
    // Required for the authentication to work
    return Promise.resolve();
  },
  logout: () => {
    // Required for the authentication to work
    return Promise.resolve();
  },
  checkError: () => {
    // Required for the authentication to work
    return Promise.resolve();
  },
  // ...
};

export default authProvider;
