import React from "react";
import App from '../App';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import '../App';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Router = () => (
    <BrowserRouter>
        <Route render={({location}) => (
            <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
            >
                <Switch location={location}>
                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
        )}/>

        
    </BrowserRouter>
)

export default Router;