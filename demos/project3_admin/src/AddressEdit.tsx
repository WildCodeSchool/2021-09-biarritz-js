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