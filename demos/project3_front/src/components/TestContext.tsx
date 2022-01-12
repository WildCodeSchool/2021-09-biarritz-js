import React from 'react';
import { useContext } from 'react';
import CurrentTestContext from '../contexts/CurrentTest';

const TestContext = () => {
  const { setNumberClick, numberClick } = useContext(CurrentTestContext);

  return (
    <>
      <p>{numberClick}</p>
      <button onClick={() => setNumberClick(numberClick + 1)}>+1</button>
    </>
  );
};

export default TestContext;
