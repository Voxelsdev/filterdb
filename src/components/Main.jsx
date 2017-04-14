import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import ContactInfo from './ContactInfo';
import AddressInfo from './AddressInfo';
import Styles from '../css/Main.css';

export default class Main extends Component {
  render() {
    return (
      <div className={Styles.thing}>
        <Router>
          <Row>
            <Col s={3}>
              <Link to="/contact">Contact<br></br>Information</Link>
            </Col>
            <Col s={3}>
              <Link to="/shipping-contact">Shipping Contact<br></br>Information</Link>
            </Col>
            <Col s={2}>
              <Link to="/billing-contact">Billing Contact<br></br>Information</Link>
            </Col>
            <Col s={2}>
              <Link to="/billing-address">Billing<br></br>Address</Link>
            </Col>
            <Col s={2}>
              <Link to="/shipping-address">Shipping<br></br>Address</Link>
            </Col>
            <Route path="/contact" render={() => (
              <ContactInfo info={{ stuff: 'stuff' }}></ContactInfo>
            )}/>
            <Route path="/shipping-address" render={() => (
              <AddressInfo info={{ stuff: 'stuff' }}></AddressInfo>
            )}/>
            <Route path="/shipping-contact" render={() => (
              <ContactInfo info={{ stuff: 'stuff' }}></ContactInfo>
            )}/>
            <Route path="/billing-address" render={() => (
              <AddressInfo info={{ stuff: 'stuff' }}></AddressInfo>
            )}/>
            <Route path="/billing-contact" render={() => (
              <ContactInfo info={{ stuff: 'stuff' }}></ContactInfo>
            )}/>
          </Row>
        </Router>
      </div>);
  }
}
