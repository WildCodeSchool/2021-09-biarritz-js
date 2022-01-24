import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

const UserEdit = (props: ListProps) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="id_user" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <NumberInput source="admin" />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
