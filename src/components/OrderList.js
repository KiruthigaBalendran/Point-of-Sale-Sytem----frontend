import React, { Component } from 'react';
import { Container, Button,Table } from 'reactstrap';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getOrders, deleteOrder, getItems } from '../actions/orderAction';
import ItemList from './ItemList';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getOrders();
    }
    onViewClick = (id) => {
        console.log("id is ",id);
        // return <ItemList id={id}/>
    }
    onDeleteClick = (id) => {
        this.props.deleteOrder(id);
    }
    
    render() {
        const {orders} = this.props;
        console.log("order are ",this.props);
        return (
            <Container>
                <Table responsive>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Customer Name</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {orders.map(({ id, customerName,created }) => (
                                <tr>
                                    <td>{id}</td>
                                    <td>{customerName}</td>
                                    <td>
                                    <Moment format="D MMM YYYY" withTitle>
                                        {created}
                                    </Moment></td>
                                    <td>
                                        <Button 
                                            color="primary"
                                            style={{marginRight: '1rem'}}
                                            onClick={this.onViewClick.bind(this,id)}>View Order</Button>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this,id)}>&times;</Button>
                                    </td>
                                </tr>
                        ))}
                </tbody>
                    
                </Table>
            </Container>
        )
    }
}
ShoppingList.propTypes = {
    getOrders: PropTypes.func.isRequired,
    orders: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
    orders: state.orders.orders
});
export default connect(
    mapStateToProps,
    { getOrders, deleteOrder}
)(ShoppingList);