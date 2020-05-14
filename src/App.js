import React , {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import ContactList from './components/ContactList';
import './App.css';
// import ContactModal from './components/ContactModal';
import ContactModal  from './components/ContactModel';
import {Container} from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
class App extends Component{
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ContactModal />
          <ContactList />
        </Container>
      </div>
    </Provider>
  )};
}

export default App;
