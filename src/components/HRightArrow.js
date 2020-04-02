import React from 'react';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import {Tooltip} from 'antd';
import 'antd/dist/antd.css';
import '../App';

class HRightArrow extends React.Component {
  render(){
    return(
        <NavLink to="/about">
          <Tooltip placement="left" title="About">
            <Icon className="RightArrow" type="right" />
          </Tooltip>
        </NavLink>
    );
  }
}

export default HRightArrow;