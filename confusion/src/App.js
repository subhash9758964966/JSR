import React, {Component} from 'react';
import Menu from './components/Menucomponent';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <div >
      <Menu/>
    </div>
  );
  }
}

export default App;
