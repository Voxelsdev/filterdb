import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize'
import Main from './Main';
import Sidebar from './Sidebar';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selection: {},
    };

    this.handleResultSelect = this.handleResultSelect.bind(this);
  }

  handleResultSelect(selection) {
    this.setState({ selection });
  }

  render() {
    return (
      <Row>
        <Col s={3}>
          <Sidebar onResultSelect={this.handleResultSelect}></Sidebar>
        </Col>
        <Col s={9}>
          <Main></Main>
        </Col>
      </Row>
    );
  }
}
