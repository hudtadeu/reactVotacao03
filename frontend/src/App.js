import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
    };

    this.interval = null;
  }

  componentDidMount() {}

  render() {
    return <span>Desafio 03</span>
  }
}
