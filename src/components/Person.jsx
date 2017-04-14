import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

export default class Person extends Component {
  render() {
    return (
      <Row>
        <Row>
          {this.props.info.name}
        </Row>
        <Row>
          {this.props.info.company}
        </Row>
      </Row>
    );
  }
}
