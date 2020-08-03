import React from 'react';
import CompanyResultsItem from './CompanyResultsItem';

function CompanyRows(props) {
    return (
        <>
            {(props.companies) ? (props.companies.map(company => <CompanyResultsItem key={company.company_id} company={company} />)) : []}
        </>

    )
}

export default CompanyRows;