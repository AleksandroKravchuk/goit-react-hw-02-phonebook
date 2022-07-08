import React from "react";
import {ContactsList, ContactsItem, ContactsText,Tel } from "./Contacts.styled";

const Contacts = ({id, name, number }) => (
 
  
<ContactsList>
        {name.map((item) => (
            <ContactsItem key={item.id}>
                <ContactsText>{item.name}: <Tel>{item.number}</Tel></ContactsText>
            </ContactsItem>
        ))}
     </ContactsList>

    
)
export default Contacts;