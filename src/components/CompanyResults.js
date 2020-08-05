import React from 'react';
import CompanyRows from './CompanyRows';

function CompanyResults(props) {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">COMPANY</th>
                        <th scope="col">LOCATION</th>
                        <th scope="col">WEBSITE</th>
                        <th scope="col">PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    <CompanyRows companies={props.searchedCompanies} />
                </tbody>
            </table>
        </div>
    )
}

export default CompanyResults;