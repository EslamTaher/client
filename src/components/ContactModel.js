import React , { Component } from 'react';
import {
    Button ,Modal , ModalHeader ,ModalBody ,Form ,FormGroup , Label , Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addContact } from '../actions/contactActions';

class ContactModel extends Component {
    state={
        modal: false ,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = e =>{
        e.preventDefault();
        const newContact = {
           
            name:this.state.name
        }
        //add contact action
        this.props.addContact(newContact);
        //close modal
        this.toggle();

    }

    render(){
        return(
            <div>
                <Button className="btn btn-primary" onClick={this.toggle} style={{marginBottom:'2rem'}}> 
                    Add Friend
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add to contactList
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="contact">contact</Label>
                                <input type="text" name="name" id="contact" className="form-control"
                                 placeholder="add friend" onChange={this.onChange}/>
                                 <Button className="btn btn-primary btn-lg btn-block mt-2">Add friend</Button>
                            </FormGroup>

                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    contact: state.connect
})
 export default connect(mapStateToProps,{addContact})(ContactModel);