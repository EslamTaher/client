import axios from 'axios';
import { GET_CONTACTS , ADD_CONTACT , DELETE_CONTACTS  ,CONTACTS_LOADING} from './types';
import { connect } from 'mongoose';

export const getContacts = () => dispatch => {
    dispatch(setContactsLoading());
    axios.get('/api/contacts').then(res => {
                dispatch({
                    type: GET_CONTACTS,
                    payload: res.data
                });
            });
    }

export const addContact = contact => dispatch => {
    axios
        .post('/api/contacts',connect)
        .then(res => {
            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            });
        });

}
export const deleteContact = id => {
    return{
        type: DELETE_CONTACTS,
        payload: id
        
    }
}



export const setContactsLoading = () => {
    return{
        type: CONTACTS_LOADING
    }
}