import React from 'react';
import CompanyResults from '../components/CompanyResults';

function CompanySearchPage(props) {
    return (
        <>
            <h3>Company Search Page</h3>
            {(props.searchedCompanies.length) ? (<CompanyResults searchedCompanies={props.searchedCompanies} />) : ""}
        </>
    )
}

export default CompanySearchPage;