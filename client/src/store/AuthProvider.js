import AuthContext from './authContext';

import React, { createContext, useContext, useState } from 'react';

const AuthProvider = (props) => {
  const [username, setUsername] = useState('');
  const [id, setID] = useState('');
  const [token, setToken] = useState('');

  const authContext = {
    username: username,
    id: id,
    token: token,
    login: (id, username, token) => {
      setID(id);
      setUsername(username);
      setToken(token);
    },
    logout: () => {
      setUsername('');
      setID('');
      setToken('');
    }
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export default AuthProvider;
