import React from "react";
import { nanoid } from 'nanoid'
import Section from "./Section/Section";
import { Form }  from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

export class App extends React.Component {
  state={
  contacts: [],
  filter: '',
  }

  addName = (name, number) => {
    const nameItem = {
      name,
      id: nanoid(),
      number,
    }
       this.setState(prevState => ({
      contacts:[...prevState.contacts, nameItem]
    }))
//     this.setState(prevState => ({
//       contacts: prevState.contacts.map(item => {
// console.log(item)
//         // if (item.name === name) {
//         //   return {
//         // [...prevState.contacts, nameItem]
//         //   }
//         // }
//       })
//     }))
  
  }  
  onChange = (evt) => {
    this.setState({ filter: evt.currentTarget.value })
  };
  getVisibleName = () => {
    const { contacts, filter } = this.state;
    const normalazedFilter = filter.toLowerCase;
    return contacts.filter(item=>item.name.toLowerCase().includes(normalazedFilter))
  }
  
  render() {
const { contacts, filter } = this.state;    
const visibleName = this.getVisibleName();
console.log(visibleName)

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Section title={"Phonebook"}>
       <Form onSubmit = {this.addName}></Form>
      </Section>
      <Section title={"Contacts"}>
      <Filter value={filter} onChange={this.onChange}></Filter>
      <Contacts name={contacts} ></Contacts>
      </Section>
    </div>
  );
  }
  
};
