import React, { Component } from 'react';
import { Row, Col, Input } from 'react-materialize';

export default class AddressInfo extends Component {
  render() {
    return (
      <Row>
        <Col s={4}>
          <Input type="text" placeholder={this.props.address || 'Address'} />
        </Col>
        <Col s={4}>
          <Input type="text" placeholder={this.props.city || 'City'} />
        </Col>
        <Col s={1}>
          <Input type="text" placeholder={this.props.state || 'State'} />
        </Col>
        <Col s={3}>
          <Input type="text" placeholder={this.props.country || 'Country'} />
        </Col>
        <Col s={2}>
          <Input type="text" placeholder={this.props.zip || 'Zip'} />
        </Col>
      </Row>
    )
  }
}
