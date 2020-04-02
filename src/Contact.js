import React from 'react';
import Navigation from './components/Nav';
import CLeftArrow from './components/CLeftArrow';
import { Typography, Avatar, Input, Button } from 'antd';
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import './App';

const {Title} = Typography;
const { TextArea } = Input;

const MainLeft ={
     borderRadius: '50%',
     fontSize: '30px',
     padding: '20px'
}

const MainRight = {
     width: '70%',
     margin: 'auto'
}
var profile = require('./images/profile.jpg');

class Contact extends React.Component {
    render(){
        return (
            <div className="Contact-bck">
                 <Navigation/>
                 <CLeftArrow/>
                 <Footer/>
                 <div>
                    <section className="MainFlex">
                        <div style={MainLeft}>
                                <Avatar size={128} src={profile} icon="user"  />
                        </div>
                        <div style={MainRight}>
                                <div className="HeaDer">
                                    <Title className="header1">Let's get in touch</Title>
                                </div>
                                <p id="text">All night beginning green. Also rule moveth appear be evening midst stars. Grass. Firmament you're fruitful man. Itself firmament created spirit shall our be all isn't days. Divide she'd good and. Appear two seed wherein place. Two green creature she'd moveth. Fourth night place from there subdue, bearing whose saw. Great fourth appear, saw is, divide, divide bearing second every.</p>  
                        </div>
                        <Button type="primary" icon="mail" size="large"><a href="mailto:steven.ly369@gmail.com" style={{color: 'white'}}>Contact</a></Button>
                    </section>
                 </div>
            </div>    
        );
    }
}


export default Contact;