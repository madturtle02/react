import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message'
import Counter from './components/Counter'
import Recap from './components/Recap'
import ParentComponent from './components/ParentComponent'
import ConditionalRendering from './components/ConditionalRendering'
import ListRendering from './components/ListRendering'


class App extends Component {
  render() {
    return (
      <div className="App">

        <ListRendering/>

        {/* <ConditionalRendering/>
        <ParentComponent/>
        <Message/>
        <Counter> </Counter>
        <Recap/>
        <Greet name="rajib" nickname="winner"> 
        <h1>this person is genuine</h1>
        </Greet>
        <Welcome name="zenith" nickname="geek"/> */}
      </div>
    );
  }
}

export default App;
