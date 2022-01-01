import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import CurrentUserContext from '../contexts/CurrentUser';
import IAddress from '../interfaces/IAddress';
import Address from './Address';

type Props = { onlyMine?: boolean };

const AddressList: React.FC<Props> = ({ onlyMine = false }) => {
  const [addresses, setAddresses] = useState<IAddress[]>();
  const { id, firstname } = useContext(CurrentUserContext);

  useEffect(() => {
    let url: string = 'http://localhost:8000/api/';
    if (onlyMine) {
      url += `users/${id}/addresses`;
    } else {
      url += 'addresses';
    }
    axios
      .get<IAddress[]>(url, { withCredentials: true })
      .then((response) => response.data)
      .then((data) => setAddresses(data));
  }, [onlyMine]);

  return (
    <div>
      {id != 0 && <h2>Voici les adresses au nom de {firstname}</h2>}
      {addresses &&
        addresses.map((address) => <Address key={address.id_address} {...address} />)}
    </div>
  );
};

export default AddressList;
