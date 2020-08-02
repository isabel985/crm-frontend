import React from 'react';
import CompanyResults from '../components/CompanyResults';

function CompanySearchPage(props) {
    return (
        <div>
            <h3>Company Search Page</h3>
            <CompanyResults searchedCompanies={props.searchedCompanies} />
        </div>
    )
}

export default CompanySearchPage;