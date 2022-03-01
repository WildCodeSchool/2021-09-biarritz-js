<<<<<<< HEAD
import { Edit, SimpleForm, NumberInput, DateInput, TextInput } from "react-admin";

export const AddressEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id_address" disabled/>
            <NumberInput source="postal_code" />
            <TextInput source="city" />
            <TextInput source="address1" />
            <TextInput source="address2" />
            <NumberInput source="id_user" />
        </SimpleForm>
    </Edit>
);
=======
import {
  DateInput,
  Edit,
  ListProps,
  maxLength,
  NumberInput,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { PostEditActions } from './PostEditActions';

export const AddressEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id_address" disabled />
      <TextInput source="postal_code" validate={maxLength(5)} />
      <TextInput source="city" />
      <TextInput source="address1" />
      <TextInput source="address2" />
      <NumberInput source="id_user" />
    </SimpleForm>
  </Edit>
);
>>>>>>> 6469e0a5b061f45fbf6fcde77d4b67c3e4145c31
