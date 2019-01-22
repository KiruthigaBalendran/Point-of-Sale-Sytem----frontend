import React from 'react';
import { List, Edit,Create, Datagrid, TextField, EditButton, SimpleForm, DisabledInput,DateField,ReferenceInput,TextInput } from 'react-admin';

export const OrderList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="orderId" />
            <TextField source="createdDate" />
            <TextField source="createdAt" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const OrderEdit = props => (
    <Edit {...props}>
        <SimpleForm>
          <DisabledInput source="orderId" />
            {/* <ReferenceInput source="orderId" reference="orderList">
                <SelectInput optionText="orderId" />
            </ReferenceInput> */}
            <TextInput label="Created Date" source="createdDate"/>
            <TextInput label="Created Time" source="createdAt" />
        </SimpleForm>
    </Edit>
);

// export const OrderCreate = props => (
//     <Create {...props}>
//         <SimpleForm>
//             {/* <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput> */}
            
//             <TextInput source="title" />
//             <LongTextInput source="body" />
//         </SimpleForm>
//     </Create>
// );