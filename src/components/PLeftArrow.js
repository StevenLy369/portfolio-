import React from 'react';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import {Tooltip} from 'antd';
import 'antd/dist/antd.css';
import '../App';

class PLeftArrow extends React.Component {
  render(){
    return(
      <NavLink to='/about'>
        <Tooltip placement="right" title="About">
          <Icon className="LeftArrow" type="left" />
        </Tooltip>
      </NavLink>
    );
  }
}

export default PLeftArrow;