import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);
   return (
      <div>
           <p>{count}</p>
           <button
               onClick={() =>
                   setCount(count + 1)}
           >
               +1
           </button>
      </div>

  );
};

export default Counter;
