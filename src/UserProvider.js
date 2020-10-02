
import React, { useEffect, useState, useContext } from 'react';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // without the async, UI will render before the token is load.
  // that cause UI jump to login view when refresh
  const loadToken = async () => {
    const tokenData = await localStorage.getItem('RMS:AUTH_SERVICE:TOKENS')
    if(!!tokenData)
    {
      setToken(JSON.parse(tokenData));
    }
    else{
      setToken(null);
    }
    setLoading(false);
  }
  
  useEffect(() => {
    loadToken();
  }, []);

  return (
    <UserContext.Provider value={{token, setToken}}>
      {!loading && props.children}
    </UserContext.Provider>
  );
};

export const useSession = () => {
  const session = useContext(UserContext);
  return session;
};
