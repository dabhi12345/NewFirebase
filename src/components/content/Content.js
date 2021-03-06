import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Home'
import UersChart from '../../UersChart'
import Login from '../../Login';
import MyDetail from '../../Form'
import UserTable from '../../UserTable'

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/sidebar" component={UersChart} />
        <Route exact path="/sidebar/applyleave" component={Home}/>
        <Route exact path="/" component={Login} />
        <Route exact path="/sidebar/usertable" component={UserTable} />
        {/* <Route exact path="/faq" component={() => "FAQ" } />   
        <Route exact path="/Home-1" component={() => "Home-1" } />
        <Route exact path="/Home-2" component={() => "Home-2" } />
        <Route exact path="/Home-3" component={() => "Home-3" } />
        <Route exact path="/Page-1" component={() => "Page-1" } />
        <Route exact path="/Page-2" component={() => "Page-2" } />
        <Route exact path="/page-1" component={() => "page-1" } />
        <Route exact path="/page-2" component={() => "page-2" } />
        <Route exact path="/page-3" component={() => "page-3" } />
        <Route exact path="/page-4" component={() => "page-4" } />*/}
      </Switch>
    </Container>
)
