import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/AppNavBar';
import OrderList from './components/OrderList';
import OrderModal from './components/OrderModal';
//import ItemList from './components/ItemList';
import {Container} from 'reactstrap';

import {Provider} from 'react-redux';
import store from './Store';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <NavBar/>
        <Container>
          <OrderModal/>
          <OrderList/>
          {/* <ItemList/> */}
        </Container>
        
      </div>
      </Provider>
    );
  }
}

export default App;
