import React , { Component} from 'react';

import {Container , ListGroup , ListGroupItem , Button } from 'reactstrap';
import {CssTransition , TransitionGroup, CSSTransition} from 'react-transition-group';
import { connect} from 'react-redux';
import { getContacts  , deleteContact} from '../actions/contactActions';
import PropTypes from 'prop-types';

class ContactList extends Component{
    componentDidMount(){
        this.props.getContacts();
    }
    onDeleteClick = id => {
        this.props.deleteContact(id);
    }

    render(){
        // this.props.connect.contacts;
        const { contacts } = this.props.contact;
        return(
            <Container>
                
                <ListGroup>
                    <TransitionGroup className="contact-list">
                        {contacts.map(({_id ,name}) => (
                            <CSSTransition key={_id} timeout={200} classNames="fade">
                                <ListGroupItem>{name}
                                    <Button className="btn btn-danger float-right mb-1" color="red" 
                                        onClick={this.onDeleteClick.bind(this,_id)}>
                                        delete
                                    </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
ContactList.propTypes = {
    getContacts:PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    contact: state.contact
})
export default connect(
    mapStateToProps,
    {getContacts , deleteContact}
)(ContactList);
    