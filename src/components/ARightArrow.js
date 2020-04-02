import React from 'react';
import { Icon} from 'antd';
import { NavLink } from 'react-router-dom';
import {Tooltip} from 'antd';
import 'antd/dist/antd.css';
import "../App";

class ARightArrow extends React.Component {
  render(){
    return(
      <div>
        <NavLink to="/portfolio">
          <Tooltip placement="left" title="portfolio">
            <Icon className="RightArrow" type="right" />
          </Tooltip>
        </NavLink>
      </div>
    );
  }
}

export default ARightArrow;