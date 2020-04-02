import React from 'react';
import Navigation from './components/Nav';
import './App.css';
import HRightArrow from './components/HRightArrow';
import MainText from './components/MainText';
import Footer from './components/Footer';
import MyParticle from './components/MyParticle';


class App extends React.Component {
  render () {
    return (
      <div className="home-bck">
          <Navigation/>
          <MainText/>
          <HRightArrow/>
          <MyParticle/>
          <Footer/>
      </div>
    );
  }
}

export default App;
