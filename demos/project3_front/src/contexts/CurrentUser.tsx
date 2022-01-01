import React, { createContext, useState } from 'react';

type UserContent = {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  firstname: string;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  admin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

type Props = { children: Element };

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

  const logout = (): void => {
    setId(0);
    setFirstname('');
    setAdmin(false);
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
