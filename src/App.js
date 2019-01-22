import React from 'react';
import { Admin, Resource, fetchUtils} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';


//import { PostList, PostEdit, PostCreate } from './posts';
import { OrderList, OrderEdit } from './orderList';
import authProvider from './authProvider';


import OrderListIcon from '@material-ui/icons/EventNote';


const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  options.headers.set('Access-Control-Allow-Origin', '*');

  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('http://localhost:8080', httpClient);


const App = () => (
  <Admin title="Order List" dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="orderList" list={OrderList} edit={OrderEdit} icon={OrderListIcon}/>
  </Admin>
);



export default App;
