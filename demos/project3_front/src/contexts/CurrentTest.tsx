import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

type TestContent = {
  numberClick: number;
  setNumberClick: React.Dispatch<React.SetStateAction<number>>;
};

type Props = { children: JSX.Element | JSX.Element[] };

const CurrentTestContext = createContext<TestContent>({
  numberClick: 0,
  setNumberClick: () => {},
});

export const CurrentTestContextProvider: React.FC<Props> = ({ children }) => {
  const [numberClick, setNumberClick] = useState<number>(0);

  return (
    <CurrentTestContext.Provider
      value={{
        numberClick,
        setNumberClick,
      }}>
      {children}
    </CurrentTestContext.Provider>
  );
};

export default CurrentTestContext;
