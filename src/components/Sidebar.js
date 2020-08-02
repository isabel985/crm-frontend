import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavbarHeader from './NavbarHeader';
import NavbarFooter from './NavbarFooter';
import NameSearchBar from './NameSearchBar';
import CompanySearchBar from './CompanySearchBar';

function Sidebar(props) {
    return (
        <React.Fragment>
            <NavbarHeader />
            <Switch>
                <Route exact path={['/', '/search-name', '/add-name']} render={() => <NameSearchBar handleNameSubmit={props.handleNameSubmit} />} />
                <Route exact path={['/search-company', '/add-company']} render={() => <CompanySearchBar handleSubmit={props.handleSubmit} />} />
            </Switch>
            <NavbarFooter />
        </React.Fragment>
    )
}

export default Sidebar;