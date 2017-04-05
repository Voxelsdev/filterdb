import React, { Component } from 'react';
import { Row, Col, Button, Input } from 'react-materialize';
import axios from 'axios';

export default class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      searchType: 0,
      productVal: 0,
      searchResults: [],
    };

    this.setType = this.setType.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  setType(e) {
    const searchType = parseInt(e.target.value);

    this.setState({ searchType });
  }

  setProduct(e) {
    const searchType = parseInt(e.target.value);

    this.setState({ searchType });
  }

  handleSearch(e) {
    let type = '';

    if(!this.state.searchType) {
      type = 'company';
    } else if (this.state.searchType === 1) {
      type = 'people';
    } else {
      type = 'product';
    }

    if(e.target.value.length) {
      axios.post(`/search/${type}`, { name: e.value, productVal: this.state.productVal })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios.get(`/search/get/${type}`)
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err)
        });
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Input type="text"
                placeholder="Search"
                onChange={this.handleSearch}/>
        </Row>
        <Row>
          <div>
            <Input name="searchtype"
                  type="radio"
                  value="0"
                  label="Company"
                  onChange={this.setType}/>
            <Input name="searchtype"
                  type="radio"
                  value="1"
                  label="People"
                  onChange={this.setType}/>
            <Input name="searchtype"
                  type="radio"
                  value="2"
                  label="Product"
                  onChange={this.setProduct}/>
          </div>
        </Row>
        {this.state.searchResults.map((pers, i) => {
          return (<Person info={pers} key={i}></Person>);
        })}
      </div>
    );
  }
}
