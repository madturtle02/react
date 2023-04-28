import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message'
import Counter from './components/Counter'
import Recap from './components/Recap'
import ParentComponent from './components/ParentComponent'
import ConditionalRendering from './components/ConditionalRendering'
import ListRendering from './components/ListRendering'
import Styles from './components/Styles'
import Inline from './components/Inline'
import './components/appStyles.css'
import styles from './components/appStyles.module.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>

        <Inline/>

        {/* <Styles primary = {true}/> */}

        {/* <ListRendering/> */}

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
