import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList } from './UserList';
import { AddressList } from './AddressList';

const dataProvider = simpleRestProvider('http://localhost:8000/api');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={EditGuesser} />
    <Resource name="addresses" list={AddressList} />
  </Admin>
);

export default App;
