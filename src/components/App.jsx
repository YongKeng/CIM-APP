import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import CreateCustomer from "./Create-customer";
import Customers from "./Customer.component";
import EditCustomer from "./Edit-customer";
import './bootstrap.min.css';

function App() {
    return (<Router>
      <div className="App">
        <Header />
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path='/' component={CreateCustomer} />
                <Route path="/create-customer" component={CreateCustomer} />
                <Route path="/edit-customer/:id" component={EditCustomer} />
                <Route path="/customer" component={Customers} />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
    );
  }
  
  export default App;