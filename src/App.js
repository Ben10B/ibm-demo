import React, { Component } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

const lan_en = require('./data/en_US.json');
const lan_la = require('./data/la_PG.json');

class App extends Component {
  state = { data: lan_en }
  getLanguage = (lan) => {
    if(lan === 'Pig Latin') this.setState({ data: lan_la });
    else this.setState({ data: lan_en });
  }
  render() {
    const { data } = this.state;
    return (
      <Container maxWidth="xl" className="App">
        <Header data={data} getLan={this.getLanguage}/>
        <Body data={data}/>
        <Footer/>
      </Container>
    );
  }
}

export default App;
