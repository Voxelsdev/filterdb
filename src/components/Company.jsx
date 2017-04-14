import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

export default class Company extends Component {
  render() {
    return (
      <Row>
        <Row>
          {this.props.info.name}
        </Row>
        <Row>
          {this.props.info.city}, {this.props.info.state}
        </Row>
      </Row>
    );
  }
}
