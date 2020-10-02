
import React, { useEffect, useState, useContext } from 'react';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenData = localStorage.getItem('RMS:AUTH_SERVICE:TOKENS')
    if(tokenData)
    {
      setToken(tokenData);
    }
  }, []);

  return (
    <UserContext.Provider value={{token, setToken}}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useSession = () => {
  const session = useContext(UserContext);
  return session;
};
