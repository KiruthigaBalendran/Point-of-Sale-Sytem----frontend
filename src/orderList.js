import React from 'react';
import { List, Edit,Create, Datagrid,NumberField, TextField, EditButton, SimpleForm, DisabledInput,DateTimeInput,ReferenceManyField,SingleFieldList,ChipField,SelectInput,TextInput,DateField } from 'react-admin';
import {MenuList} from './menuList';

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
            <TextInput label="Customer Name" source="customerName" />
            <DateTimeInput label="Created Date/Time" source="created" options={{ format: 'YYYY-MM-DD HH:mm:ss'}}/>   
            <ReferenceManyField
                label="Menus"
                //reference={`orderList/${props.id}/menus`}
                reference = "menus"
                target="orderId"
                source="orderId"
                //filter={{ orderId: true }}>
            >
                <Datagrid>
                    <TextField source="itemId" />
                    <TextField source="itemName" />
                    <NumberField source="unitPrice" label="Unit Price" options={{ style: 'currency', currency: 'USD' }}/>
                    <TextField source="quantity" label="Qty" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>           
        </SimpleForm>
    </Edit>
);

export const OrderCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Customer Name" source="customerName" />
        </SimpleForm>
    </Create>
);