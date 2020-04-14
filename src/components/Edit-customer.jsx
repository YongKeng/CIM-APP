import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class EditCustomer extends Component {

  constructor(props) {
    super(props)

    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerAge = this.onChangeCustomerAge.bind(this);
    this.onChangeCustomerGender = this.onChangeCustomerGender.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      age: '',
      gender: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/customers/edit-customer/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          age: res.data.age,
          gender: res.data.gender,
          email: res.data.email,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeCustomerName(event) {
    this.setState({ name: event.target.value });
  }

  onChangeCustomerAge(event) {
    this.setState({ age: event.target.value });
  }

  onChangeCustomerGender(event) {
    this.setState({ gender: event.target.value });
  }

  onChangeCustomerEmail(event) {
    this.setState({ email: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault()

    const customerObject = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      email: this.state.email
  };

    axios.patch('http://localhost:4000/customers/update-customer/' + this.props.match.params.id, customerObject)
      .then((res) => {
        console.log(res.data);
        console.log('Customer data successfully updated');
      }).catch((error) => {
        console.log(error);
      })

    // Redirect to Customer List 
    this.props.history.push('/customer');
    
  }


  render() {
    return (<div className="">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeCustomerName} />
        </Form.Group>

        <Form.Group controlId="Age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" value={this.state.age} onChange={this.onChangeCustomerAge} />
        </Form.Group>

        <Form.Group controlId="Gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" value={this.state.gender} onChange={this.onChangeCustomerGender} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeCustomerEmail} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" OnClick={() => this.props.history.push('/User')}>
          Update Customer Info
        </Button>
      </Form>
    </div>);
  }
}

export default EditCustomer;