import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addOrder} from '../actions/orderAction';


class OrderModal extends Component{
    state = {
        modal: false,
        name: ''
    };
    toggle = () => {
        this.setState({
            modal : !this.state.modal
        })
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newOrder ={
            customerName : this.state.name
        }
        this.props.addOrder(newOrder);
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Add Order
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="order">Order</Label>
                            <Input
                                type="text"
                                name="name"
                                id="order"
                                placeholder="Customer Name"
                                onChange={this.onChange}
                            />
                            <Button
                                color="dark"
                                style={{marginTop:'2rem'}}
                                block>
                             Add Order</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    order: state.order
});

export default connect(mapStateToProps, {addOrder})(OrderModal);