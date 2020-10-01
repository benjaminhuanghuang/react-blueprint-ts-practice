
import React, { useEffect, useState, useContext } from 'react';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [session, setSession] = useState({
    user: {
      name: 'ben'
    },
    loading: false,
    isAdmin: false,
  });

  useEffect(() => {
    
  }, []);

  return (
    <UserContext.Provider value={session}>
      {!session.loading && props.children}
    </UserContext.Provider>
  );
};

export const useSession = () => {
  const session = useContext(UserContext);
  return session;
};
