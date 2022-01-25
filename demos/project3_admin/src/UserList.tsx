import {
  BooleanField,
  Datagrid,
  EmailField,
  FunctionField,
  Identifier,
  List,
  ListProps,
  NumberField,
  Record,
  TextField,
} from 'react-admin';
import BooleanNumField from './BooleanNumField.jsx';

type recordType = {
  admin: boolean;
  id?: Identifier | undefined;
};

const UserList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id_user" sortBy="users.id_user" />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <EmailField source="email" />
        <BooleanNumField source="admin" />
      </Datagrid>
    </List>
  );
};

export default UserList;
