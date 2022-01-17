import './App.css';
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  DataProvider,
} from 'react-admin';
import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import { AddressList } from './AddressList';
import { UserList } from './UserList';

const App = () => {
  // console.log(simpleRestProvider('http://localhost:8000/api').getList("users",));
  return (
    <Admin
      // authProvider={authProvider}
      dataProvider={simpleRestProvider('http://localhost:8000/api')}
    >
      <Resource name="users" list={UserList} edit={EditGuesser} />
      <Resource name="addresses" list={AddressList} />
    </Admin>
  );
};

export default App;
