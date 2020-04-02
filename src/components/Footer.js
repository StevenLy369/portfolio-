import React from 'react';
import '../App';

var github = require('../images/github.svg');
var linkedIn = require('../images/linkedin.svg');
const foot = {
    zIndex: 900
}

class Footer extends React.Component {
    render(){
        return (
            <div className="FIcon">
                <div>
                    <a href="https://github.com/StevenLy369">
                        <img style={foot} src={github} height="35" width="35" alt="Github Logo" />
                    </a>
                </div>
                <div className="FRight">
                    <a hred="#">
                        <img style={foot} src={linkedIn} height="35" width="35" alt="LinkedIn Logo" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;