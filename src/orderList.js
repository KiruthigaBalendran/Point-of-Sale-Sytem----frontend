import React from 'react';
import { List, Edit,Create, Datagrid, TextField, EditButton, SimpleForm, DisabledInput,DateTimeInput,ReferenceInput,TextInput,DateField } from 'react-admin';

export const OrderList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="orderId" label="Order ID"/>
            <TextField source="customerName" label="Customer Name" />
            <DateField source="created" label="Created" locales="fr-FR" />
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
            <TextInput label="Customer Name" source="customerName" />
            <DateTimeInput label="Created Date/Time" source="created" options={{ format: 'YYYY-MM-DD HH:mm:ss'}}/>           
        </SimpleForm>
    </Edit>
);

export const OrderCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
            <TextInput label="Customer Name" source="customerName" />
        </SimpleForm>
    </Create>
);