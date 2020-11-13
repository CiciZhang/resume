import React, {Component} from 'react';
import './App.css';
import Experience from './sections/Experience'
import Header from './sections/Header'


class App extends Component {
  render(){
    return (
      <main>
        <Header/>
        <Experience />
      </main>
    )
  }
}

export default App