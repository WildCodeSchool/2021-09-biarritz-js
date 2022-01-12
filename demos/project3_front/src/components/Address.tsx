import React from 'react';

import IAddress from '../interfaces/IAddress';

type Props = IAddress;

const Address: React.FC<Props> = (props) => {
  return (
    <ul className="address">
      <li>{props.address1}</li>
      <li>{props.address2}</li>
      <li>
        {props.postal_code} {props.city}
      </li>
    </ul>
  );
};

export default Address;
