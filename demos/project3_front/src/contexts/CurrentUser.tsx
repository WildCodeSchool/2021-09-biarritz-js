import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

type UserContent = {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  firstname: string;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  admin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

type Props = { children: React.ReactNode };

const CurrentUserContext = createContext<UserContent>({
  id: 0,
  setId: () => {},
  firstname: '',
  setFirstname: () => {},
  logout: () => {},
  admin: false,
  setAdmin: () => {},
});

export const CurrentUserContextProvider: React.FC<Props> = ({ children }) => {
  const [id, setId] = useState<number>(0);
  const [firstname, setFirstname] = useState<string>('');
  const [admin, setAdmin] = useState<boolean>(false);
  const removeCookie = useCookies(['user_token'])[2];

  const logout = (): void => {
    setId(0);
    setFirstname('');
    setAdmin(false);
    removeCookie('user_token');
  };

  return (
    <CurrentUserContext.Provider
      value={{
        id,
        setId,
        firstname,
        setFirstname,
        logout,
        admin,
        setAdmin,
      }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
