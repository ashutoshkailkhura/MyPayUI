import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [appLang, setAppLang] = useState('English');
  return (
    <UserContext.Provider value={{isLogIn, setIsLogIn, appLang, setAppLang}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
