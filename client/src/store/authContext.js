import { createContext } from 'react';

//We  define our context with empty data for better code completion later on
const AuthContext = createContext({
  username: '',
  id: '',
  token: '',
  login: (id, username, token) => {},
  logout: () => {}
});

export default AuthContext;
