import React from 'react';
import { Icon } from 'antd';
import { NavLink} from 'react-router-dom';
import {Tooltip} from 'antd';
import 'antd/dist/antd.css';
import '../App';

class ALeftArrow extends React.Component {
  render(){
    return(
      <NavLink to='/'>
        <Tooltip className="btns" placement="right" title="Home">
          <Icon className="LeftArrow" type="left" />
        </Tooltip>
      </NavLink>
    );
  }
}

export default ALeftArrow;