// eslint-disable-next-line no-unused-vars
import React from "react";
import { List, Datagrid, TextField, NumberField } from "react-admin";

export const GoodsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" />
        <TextField source="category" />
        <NumberField source="price" />
      </Datagrid>
    </List>
  );
};
