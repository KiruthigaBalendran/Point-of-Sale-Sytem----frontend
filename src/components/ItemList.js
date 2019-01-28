import React, { Component } from 'react';
import { Container, Button,Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems,deleteItem} from '../actions/orderAction';
import PropTypes from 'prop-types';

class ItemList extends Component {

    componentDidMount() {
       const id = 'ORDER 1'; 
       this.props.getItems(id);
    }

    onDeleteClick = (orderId,itemId) => {
        this.props.deleteItem(orderId,itemId);
    }
    
    render() {
        const { items } = this.props;
        return (
            <Container>
                <Table responsive>
                <thead>
                    <tr>
                        <th>Item Id</th>
                        <th>Item Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {items.map(({ orderId,itemId, itemName,unitPrice, quantity }) => (
                                <tr>
                                    <td>{itemId}</td>
                                    <td>{itemName}</td>
                                    <td>{unitPrice}</td>
                                    <td>{quantity}</td>
                                    <td>
                                    <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this,orderId,itemId)}>&times;</Button>
                                    </td>
                                </tr>
                        ))}
                </tbody>
                    
                </Table>
            </Container>
        )
    }
}
ItemList.propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
    items: state.orders.items
});
export default connect(
    mapStateToProps,
    { getItems,deleteItem}
)(ItemList);