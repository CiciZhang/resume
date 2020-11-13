import React, {Component} from 'react';
import './App.css';
import Experience from './sections/Experience'

class App extends Component {
  render(){
    return (
      <main>
        <h1>Resume</h1>
        <Experience />
      </main>
    )
  }
}

export default App