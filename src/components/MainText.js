import React from 'react';
import { Avatar, Button, Typography } from 'antd';
import 'antd/dist/antd.css';
import '../App';


const MainLeft ={
     borderRadius: '50%',
     fontSize: '30px',
     padding: '20px'
}

const {Title} = Typography;

const MainRight = {
     width: '70%',
     margin: 'auto'
}
var profile = require('../images/profile.jpg');

class MainText extends React.Component {
     render(){
     return(
          <section className="MainFlex">
               <div style={MainLeft}>
                    <Avatar size={128} src={profile} icon="user"  />
               </div>
               <div style={MainRight}>
                    <div className="HeaDer">
                         <Title style={{color: 'white'}}>Hi! I'm a Web Developer</Title>
                    </div>
                    <p id="text">All night beginning green. Also rule moveth appear be evening midst stars. Grass. Firmament you're fruitful man. Itself firmament created spirit shall our be all isn't days. Divide she'd good and. Appear two seed wherein place. Two green creature she'd moveth. Fourth night place from there subdue, bearing whose saw. Great fourth appear, saw is, divide, divide bearing second every.</p>  
               </div>
               <Button type="primary" icon="mail" size="large"><a href="mailto:steven.ly369@gmail.com" style={{color: 'white'}}>Contact</a></Button>
          </section>
     );
  }
}

export default MainText;