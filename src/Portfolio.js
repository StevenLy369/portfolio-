import React from 'react';
import Navigation from './components/Nav';
import PLeftArrow from './components/PLeftArrow';
import PRightArrow from './components/PRightArrow';
import Footer from './components/Footer';
import { Typography, Row, Col, Tag, Button } from 'antd';

const { Title } = Typography;
var screen1 = require('./images/Screenshot1.png');
const btn = {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center'
}

class About extends React.Component {

    state = {
        loading: false,
        iconLoading: false,
      };
    
      enterLoading = () => {
        this.setState({ loading: true });
      };
    
      enterIconLoading = () => {
        this.setState({ iconLoading: true });
      };

    render(){
        return (
            <div className="Portfolio-bck">
                 <Navigation/>
                 <PLeftArrow/>
                 <PRightArrow/>
                 <Footer/>
                 <div class="Port-top">
                    <div className="head-container">
                        <Title className="header1">My Website Portfolio</Title>
                    </div>
                    <p>All night beginning green. Also rule moveth appear be evening midst stars. Grass. Firmament you're fruitful man. Itself firmament created spirit shall our be all isn't days. Divide she'd good and. Appear two seed wherein place. Two green creature she'd moveth. Fourth night place from there subdue, bearing whose saw.</p>
                 </div>
                 <div className="Port-bottom">
                    <Row gutter={24}>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <figure className="img-wrapper">
                                <img className="main-image" src={screen1} height="200" width="400" alt="Portfolio 1" />
                                <figcaption className="capt">
                                    <Title style={{color: "white"}} level={3}>Boogie-Battle</Title>
                                    <Tag color="#45d">Angular</Tag>
                                    <Tag color="#45d">Webpack</Tag>
                                    <div className="btn" style={btn}>
                                        <Button type="default" icon="github" ghost onClick={this.enterIconLoading} loading={this.state.iconLoading}>
                                            <a href="#" target="_blank" rel="noopener noreferrer">Github</a>
                                        </Button>
                                        <Button type="default" icon="search">
                                            <a href="http://boogie-battle.herokuapp.com" target="_blank" rel="noopener noreferrer">Website</a>
                                        </Button>
                                    </div>
                                </figcaption>
                                <div className="overlay"></div>
                            </figure>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <figure className="img-wrapper">
                                <img className="main-image" src={screen1} height="200" width="400" alt="Portfolio 1" />
                                <figcaption className="capt">
                                    <Title style={{color: "white"}} level={3}>Boogie-Battle</Title>
                                    <Tag color="#45d">Angular</Tag>
                                    <Tag color="#45d">Webpack</Tag>
                                    <div className="btn" style={btn}>
                                        <Button type="default" icon="github" ghost onClick={this.enterIconLoading} loading={this.state.iconLoading}>
                                            <a href="#" target="_blank" rel="noopener noreferrer">Github</a>
                                        </Button>
                                        <Button type="default" icon="search">
                                            <a href="http://boogie-battle.herokuapp.com" target="_blank" rel="noopener noreferrer">Website</a>
                                        </Button>
                                    </div>
                                </figcaption>
                                <div className="overlay"></div>
                            </figure>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <figure className="img-wrapper">
                                <img className="main-image" src={screen1} height="200" width="400" alt="Portfolio 1" />
                                <figcaption className="capt">
                                    <Title style={{color: "white"}} level={3}>Boogie-Battle</Title>
                                    <Tag color="#45d">Angular</Tag>
                                    <Tag color="#45d">Webpack</Tag>
                                    <div className="btn" style={btn}>
                                        <Button type="default" icon="github" ghost onClick={this.enterIconLoading} loading={this.state.iconLoading}>
                                            <a href="#" target="_blank" rel="noopener noreferrer">Github</a>
                                        </Button>
                                        <Button type="default" icon="search">
                                            <a href="http://boogie-battle.herokuapp.com" target="_blank" rel="noopener noreferrer">Website</a>
                                        </Button>
                                    </div>
                                </figcaption>
                                <div className="overlay"></div>
                            </figure>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <figure className="img-wrapper">
                                <img className="main-image" src={screen1} height="200" width="400" alt="Portfolio 1" />
                                <figcaption className="capt">
                                    <Title style={{color: "white"}} level={3}>Boogie-Battle</Title>
                                    <Tag color="#45d">Angular</Tag>
                                    <Tag color="#45d">Webpack</Tag>
                                    <div className="btn" style={btn}>
                                        <Button type="default" icon="github" ghost onClick={this.enterIconLoading} loading={this.state.iconLoading}>
                                            <a href="#" target="_blank" rel="noopener noreferrer">Github</a>
                                        </Button>
                                        <Button type="default" icon="search">
                                            <a href="http://boogie-battle.herokuapp.com" target="_blank" rel="noopener noreferrer">Website</a>
                                        </Button>
                                    </div>
                                </figcaption>
                                <div className="overlay"></div>
                            </figure>
                        </Col>
                    </Row>
                 </div>
            </div>    
        );
    }
}

export default About;