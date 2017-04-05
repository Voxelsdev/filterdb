import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize'
import Main from './Main';
import Sidebar from './Sidebar';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      person: {},
    };
  }

  render() {
    return (
      <Row>
        <Col s={3}>
          <Sidebar></Sidebar>
        </Col>
        <Col s={9}>
          <Main></Main>
        </Col>
      </Row>
    );
  }
}
