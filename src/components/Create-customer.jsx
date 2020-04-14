import React, { Component } from 'react';
import axios from 'axios';

class CreateCustomer extends Component {

    constructor(props) {
        super(props)

        this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
        this.onChangeCustomerAge = this.onChangeCustomerAge.bind(this);
        this.onChangeCustomerGender = this.onChangeCustomerGender.bind(this);
        this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            age: '',
            gender: '',
            email: ''
        }
    }

    onChangeCustomerName(event) {
        this.setState({ name: event.target.value })
    }

    onChangeCustomerAge(event) {
        this.setState({ age: event.target.value})
    }

    onChangeCustomerGender(event) {
        this.setState({ gender: event.target.value})
    }

    onChangeCustomerEmail(event) {
        this.setState({ email: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const customerObject = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            email: this.state.email
        };

        axios.post('http://localhost:4000/customers/create', customerObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', age: '', gender: '', email: '' });

        window.location = 'http://localhost:3000/customer';
    }


    render() {
        return (
            <div className="">
                <form className= "form-style" onSubmit={this.onSubmit}>
                <h3>Please enter customer details</h3>
                <br/>               
                    <div className="form-group">
                        <label>Customer Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeCustomerName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Customer Age</label>
                        <input type="text" value={this.state.age} onChange={this.onChangeCustomerAge} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Customer Gender</label>
                        <input type="text" value={this.state.gender} onChange={this.onChangeCustomerGender} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Customer Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeCustomerEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create New Customer" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateCustomer;