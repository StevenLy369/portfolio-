import React from 'react';
import '../App';
import { NavLink} from 'react-router-dom';

var LogoImg = require('../images/sl-Logo-white.svg');
const navbar = {
  width: '100%',
  textAlign: 'left',
  zIndex: 700
}

const Head = {
  padding: 0,
  marginLeft: '20px'
}

class Navigation extends React.Component {
  render(){
    return(
      <nav style={navbar}>
        <img style={Head} src={LogoImg} height="80" width="80" alt="Logo" />
      </nav>
    );
  }
}

export default Navigation;