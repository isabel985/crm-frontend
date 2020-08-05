import React from 'react';
import CompanyResults from '../components/CompanyResults';

function CompanySearchPage(props) {
    return (
        <div className="container company-search">
            <div className="row">
                <form onSubmit={props.handlePostCompany}>
                    <div className="row">
                        <div className="col-md-12">
                            <h3>{props.searchedCompanies.length > 0 ? `${props.searchedCompanies.length} Companies Found` : `Start Searching...`}</h3>
                            {(props.searchedCompanies.length) ? (<CompanyResults searchedCompanies={props.searchedCompanies} />) : ""}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompanySearchPage;