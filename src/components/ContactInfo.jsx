import React, { Component } from 'react';
import { Row, Col, Input } from 'react-materialize';

export default class ContactInfo extends Component {
  render() {
    return (
      <Row>
        <Row>
          <Col s={3}>
            <Input type="text" placeholder={this.props.info.contact || 'Contact'} />
          </Col>
          <Col s={3}>
            <Input type="text" placeholder={this.props.info.title || 'Title'} />
          </Col>
          <Col s={3}>
            <Input type="text" placeholder={this.props.info.department || 'Department'} />
          </Col>
          <Col s={3}>
            <Input type="text" placeholder={this.props.info.email || 'Email'} />
          </Col>
        </Row>
        <Row>
          <Col s={3}>
            <Input type="text" placeholder={this.props.info.phOffice || 'Ph. Office'} />
          </Col>
          <Col s={3}>
            <Input type="text" placeholder={this.props.info.phMobile || 'Ph. Mobile'} />
          </Col>
          <Col s={3}>
            <Input type="text" placeholder={this.props.info.phDept || 'Ph. Dept'} />
          </Col>
          <Col s={3}>
            <Input type="text" placeholder={this.props.info.fax || 'Fax'} />
          </Col>
        </Row>
      </Row>
    )
  }
}
