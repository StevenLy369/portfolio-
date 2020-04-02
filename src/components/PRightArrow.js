import React from 'react';
import { Icon} from 'antd';
import { NavLink } from 'react-router-dom';
import {Tooltip} from 'antd';
import 'antd/dist/antd.css';
import "../App";

class PRightArrow extends React.Component {
  render(){
    return(
        <NavLink to="/contact">
          <Tooltip placement="left" title="Contact">
            <Icon className="RightArrow" type="right" />
          </Tooltip>
        </NavLink>
    );
  }
}

export default PRightArrow;