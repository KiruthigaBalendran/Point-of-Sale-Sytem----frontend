import React, { Component } from 'react';
import { Container, Button,Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems} from '../actions/orderAction';
import PropTypes from 'prop-types';

class ItemList extends Component {

    componentDidMount() {
        //console.log("id is ",this.props.id);
        this.props.viewItems();
    }
    // onViewClick = (id) => {
    //     this.props.deleteItem(id);
    // }
    // onDeleteClick = (id) => {
    //     this.props.deleteItem(id);
    // }
    
    render() {
        console.log("items are ",this.props);
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
                    </tr>
                </thead>
                <tbody>
                        {items.map(({ itemId, itemName,unitPrice, quantity }) => (
                                <tr>
                                    <td>{itemId}</td>
                                    <td>{itemName}</td>
                                    <td>{unitPrice}</td>
                                    <td>{quantity}</td>
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
    items: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    items: state.items
});
export default connect(
    mapStateToProps,
    { getItems}
)(ItemList);