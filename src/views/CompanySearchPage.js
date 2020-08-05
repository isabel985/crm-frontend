import React from 'react';
import CompanyResults from '../components/CompanyResults';

function CompanySearchPage(props) {
    return (
        <div className="container company-search">
            <div className="row">
                <form onSubmit={props.handlePostCompany}>
                    <div className="row">
                        <div className="col-md-12">
                            <p>{props.searchedCompanies.length > 0 ? `Companies Found: ${props.searchedCompanies.length}` : `Start Searching...`}</p>
                            {(props.searchedCompanies.length) ? (<CompanyResults searchedCompanies={props.searchedCompanies} />) : ""}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompanySearchPage;