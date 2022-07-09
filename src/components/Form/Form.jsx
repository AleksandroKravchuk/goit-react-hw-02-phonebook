import React from "react";
import { FormName, InputName, Label, Button} from "./Form.styled";

export class Form extends React.Component{
state = {
    name: '',
    number:'',
    }
    onAddContact = (evt) => {
        this.setState({ name: evt.target.value });
    }
    onAddNumber = (evt) => {
         this.setState({ number: evt.target.value });
    }
    hendelSubmit = (evt) => {
        evt.preventDefault();
        if (this.state.name === ""||this.state.number === "") {
            return
        }
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number:'' });
    }
    render() {
        const { name, number } = this.state;
        return (
            < FormName onSubmit={this.hendelSubmit}> 
            <Label>
                Name <br></br><InputName 
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={name}
  onChange={this.onAddContact}
                    >
                    
            </InputName>    
                </Label> <br></br>
                 <Label>
                    Number <br></br>
            <InputName 
 type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number}
  onChange={this.onAddNumber}
                    >
            </InputName>    
            </Label> <br></br>
            <Button type="submit">Add contact</Button>
            </FormName>
        )
}
}