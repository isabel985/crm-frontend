import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NameSearchBar from './NameSearchBar';
import CompanySearchBar from './CompanySearchBar';

function SearchBar(props) {
    return (
        <Switch>
            <Route
                exact path={['/', '/search-name', '/add-name', '/name/:name_id']}
                render={() =>
                    <NameSearchBar
                        handleNameSubmit={props.handleNameSubmit}
                        handleNameSelectChange={props.handleNameSelectChange}
                        handleNameInputChange={props.handleNameInputChange}
                    />
                }
            />
            <Route
                exact path={['/search-company', '/add-company', '/company/:company_id']}
                render={() =>
                    <CompanySearchBar
                        handleCompanySubmit={props.handleCompanySubmit}
                        handleCompanySelectChange={props.handleCompanySelectChange}
                        handleCompanyInputChange={props.handleCompanyInputChange}
                    />
                }
            />
        </Switch>
    )
}

export default SearchBar;