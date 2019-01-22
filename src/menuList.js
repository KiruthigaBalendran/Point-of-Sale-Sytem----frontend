import React from 'react';
import { List, Edit,Create, Datagrid,NumberField, TextField, EditButton, SimpleForm, DisabledInput,DateTimeInput,ReferenceInput,SelectInput,TextInput,DateField } from 'react-admin';

export const MenuList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="orderId" label="Order ID"/>
            <TextField source="itemId" label="Item ID"/>
            <TextField source="itemName" label="Item Name" />
            <NumberField source="unitPrice" label="Unit Price" options={{ style: 'currency', currency: 'USD' }}/>
            <TextField source="quantity" label="Qty" />
            <EditButton/>
        </Datagrid>
    </List>
);


