import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav,NavbarBrand,NavLink} from 'reactstrap';
import SideNav from '@trendmicro/react-sidenav';
import SideNavNav from '@trendmicro/react-sidenav';
import SideNavToggle from '@trendmicro/react-sidenav';
import Healthcheck from './Healthcheck';
import Home from './Home';
import About from './About';
import Discover from './Discover';
import Token from './Token';
export default function MainNavbar() {
    return(
    <Router>
    <Navbar color="bg:auto" expand="md">
      <Nav className="mr-auto" navbar>
      <NavbarBrand href="/">Discover-BI</NavbarBrand>
      <NavLink href="/Home">Home</NavLink>
      <NavLink href="/About">About</NavLink>
      
      </Nav>
    </Navbar>
      
    {/* <SideNav  className="mr-auto" bg="light" expand="sm">
        <SideNavToggle/>
        <SideNavNav>
        <NavLink href="/Healthcheck">Healthcheck</NavLink>
        <NavLink href="/token">JWT Token</NavLink>
        </SideNavNav>
      </SideNav> */}
      <Switch>
             <Route exact path="/" component={Discover}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            {/* <Route exact path="/Healthcheck" component={Healthcheck}></Route>
            <Route  exact path="/token" component={Token}></Route> */}

        </Switch>
               
    </Router>
     );
    }
     
   