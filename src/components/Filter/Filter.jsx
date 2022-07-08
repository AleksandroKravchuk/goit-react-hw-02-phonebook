import React from "react";
import { FilterInput, Label } from "./Filter.styled";

const  Filter = ({value, onChange}) => (
  
    <Label>
        Find contacts by name <FilterInput type="text" value={value} onChange = {onChange}></FilterInput>
    </Label>
)
export default Filter;