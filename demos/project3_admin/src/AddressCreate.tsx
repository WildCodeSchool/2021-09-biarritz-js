import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  regex,
  Validator,
  required,
  minLength,
  maxLength,
  ReferenceInput,
  SelectInput,
} from 'react-admin';
import { PostEditActions } from './PostEditActions';

const validateCity: Validator[] = [required(), minLength(2), maxLength(200)];
const validateAddress: Validator[] = [required(), minLength(2), maxLength(255)];
const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{5}$/, 'Must be a valid Zip Code'),
];

export default interface IUser {
  firstname: string;
  lastname: string;
}

const optionRenderer = (user: IUser) => `${user.firstname} ${user.lastname}`;

export const AddressCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une adresse" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="postal_code" validate={validatePostalCode} />
      <TextInput source="city" validate={validateCity} />
      <TextInput source="address1" validate={validateAddress} />
      <TextInput source="address2" validate={maxLength(255)} />
      <ReferenceInput source="id_user" reference="users" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
