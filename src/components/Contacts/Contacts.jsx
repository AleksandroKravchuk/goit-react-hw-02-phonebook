import React from "react";
import {ContactsList, ContactsItem, ContactsText,Tel,ButtonDelete } from "./Contacts.styled";

const Contacts = ({name, deleteName }) => (
 
  
<ContactsList>
        {name.map((item) => (
            <ContactsItem key={item.id}>
                <ContactsText>{item.name}: <Tel>{item.number}</Tel><ButtonDelete onClick={()=>deleteName(item.id)}>Delete</ButtonDelete> </ContactsText>
            </ContactsItem>
        ))}
     </ContactsList>

    
)
export default Contacts;