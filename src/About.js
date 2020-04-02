import React from 'react';
import './App';
import Navigation from './components/Nav';
import ALeftArrow from './components/ALeftArrow';
import ARightArrow from './components/ARightArrow';
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import { Typography, Steps, Row, Col, Timeline } from 'antd';

const { Title } = Typography;
const { Step } = Steps;
const { Text } = Typography;
var html = require('./images/html5-with-wordmark-color.svg'); 
var css = require('./images/css3-seeklogo.com.svg'); 
var javascript = require('./images/javascript-js-seeklogo.com.svg'); 
var npm = require('./images/npm-node-package-manager.svg'); 
var mongo = require('./images/mongodb.svg'); 
var express = require('./images/express-seeklogo.com.svg'); 
var angular = require('./images/angular-icon-seeklogo.svg'); 
var node = require('./images/node-node-js-seeklogo.com.svg'); 

class About extends React.Component {
    render(){
        return (
            <div className="About-bck">
                 <Navigation/>
                 <ALeftArrow/>
                 <ARightArrow/>
                 <Footer/>
                 <div className="ATop">
                    <Title className="header1">About Me</Title>
                    <p>All night beginning green. Also rule moveth appear be evening midst stars. Grass. Firmament you're fruitful man. Itself firmament created spirit shall our be all isn't days. Divide she'd good and. Appear two seed wherein place. Two green creature she'd moveth. Fourth night place from there subdue, bearing whose saw. </p>
                    <Steps id="step" style={{padding: '20px', borderRadius: '12px'}}  progressDot current={3}>
                        <Step title="Finished" description="You can hover on the dot." />
                        <Step title="2000" description="Enrolled in bootcamp" />
                        <Step title="2000" description="Enrolled in bootcamp" />
                        <Step title="2000" description="Enrolled in bootcamp" />
                        <Step title="2000" description="Enrolled in bootcamp" />
                    </Steps>
                    {/* Mobile only for steps */}
                    <div id="time">
                        <Timeline mode="alternate">
                            <Timeline.Item>2000: Enrolled in bootcamp</Timeline.Item>
                            <Timeline.Item>2000: Enrolled in bootcamp</Timeline.Item>
                            <Timeline.Item>2000: Enrolled in bootcamp</Timeline.Item>
                            <Timeline.Item>2000: Enrolled in bootcamp</Timeline.Item>
                        </Timeline>
                    </div>
                 </div>
                 <div className="ABottom">
                    <Title className="header1">Technologies Used</Title>
                    <p>All night beginning green. Also rule moveth appear be evening midst stars. Grass. Firmament you're fruitful man. Itself firmament created spirit shall our be all isn't days. Divide she'd good and. Appear two seed wherein place. Two green creature she'd moveth. Fourth night place from there subdue, bearing whose saw. </p>
                    <div>
                        <Row id="BCol" gutter={24}>
                            <Col className="column" xs={24} sm={12} md={6} lg={6} xl={3}>
                                <img className="line" src={html} height="80" width="80" alt="HTML" />
                            </Col>
                            <Col className="column" xs={24} sm={12} md={6} lg={6} xl={3}>
                                <img className="line" src={css} height="80" width="80" alt="css" />
                            </Col>
                            <Col className="column" xs={24} sm={12} md={6} lg={6} xl={3}>
                                <img className="line" src={javascript} height="80" width="80" alt="javascript" />
                            </Col>
                            <Col className="column" xs={24} sm={12} md={6} lg={6} xl={3}>
                                <img className="line" src={npm} height="80" width="80" alt="npm" />
                            </Col>
                            
                            <Col className="column" xs={24} sm={12} md={6} lg={6} xl={3}>
                                <img className="line" src={mongo} height="80" width="80" alt="HTML" />
                            </Col>
                            <Col className="column" xs={24} sm={12} md={6} lg={6} xl={3}>
                                <img className="line" src={angular} height="80" width="80" alt="css" />
                            </Col>
                            <Col className="column" xs={24} sm={12} md={6} lg={6} xl={3}>
                                <img className="line" src={express} height="80" width="80" alt="javascript" />
                            </Col>
                            <Col className="column" xs={24} sm={12} md={6} lg={6} xl={3}>
                                <img className="line" src={node} height="80" width="80" alt="npm" />
                            </Col>
                        </Row>
                    </div>
                 </div>
            </div>    
        );
    }
}

export default About;