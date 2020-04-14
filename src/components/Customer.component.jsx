import React, { Component } from 'react';
import axios from 'axios';
import CustomerTableRow from './Customer-tablerow';
import Table from 'react-bootstrap/Table';



class Customers extends Component {

    constructor(props) {
        super(props);
        this.state = { customerCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/customers/')
            .then(res => {
                this.setState({ customerCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.customerCollection.map((data, i) => {
            return <CustomerTableRow obj={data} key={i} />;
        });
    }

    render() {
        return (<div className="table-responsive table-div">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.dataTable()}
            </tbody>
          </Table>
        </div>);
      }
}

export default Customers;