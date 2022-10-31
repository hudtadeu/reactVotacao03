import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({
            candidates: json.candidates,
          })
        })
    }, 1000);
  }

  render() {
    return <span>Desafio 03</span>
  }
}
