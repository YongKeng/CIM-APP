import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class CustomerTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer() {
        axios.delete('http://localhost:4000/customers/delete-customer/' + this.props.obj._id)
            .then((res) => {
                console.log('Customer information successfully deleted!');
            }).catch((error) => {
                console.log(error);
            });

        window.location.reload(false);

    }
    

    render() {
        return (
            <tr>
                <td>{this.props.obj._id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.age}</td>
                <td>{this.props.obj.gender}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <Link className="edit-function" to={"/edit-customer/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteCustomer} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}

export default CustomerTableRow;