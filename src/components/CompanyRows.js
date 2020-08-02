import React from 'react';
import CompanyResultsItem from './CompanyResultsItem';

function CompanyRows(props) {
    if (props.companies) {
        var companies = props.companies
    } else {
        var companies = []
    }
    return (
        <React.Fragment>
            {companies.map(company => <CompanyResultsItem key={company.company_id} company={company} />)}
        </React.Fragment>
    )
}

export default CompanyRows;