import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from 'react-admin';

const AddressList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id_address" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="address1" />
      <TextField source="address2" />
      <TextField source="city" />
      <TextField source="postal_code" />
      <ReferenceField label="User" source="id_user" reference="users">
        <>
          <TextField source="firstname" /> <TextField source="lastname" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default AddressList;
