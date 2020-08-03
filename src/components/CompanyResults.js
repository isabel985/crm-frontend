import React from 'react';
import CompanyRows from './CompanyRows';

function CompanyResults(props) {
    return (
        <div>
            Company Result(s): {props.searchedCompanies.length}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Company</th>
                        <th scope="col">Location</th>
                        <th scope="col">Website</th>
                        <th scope="col">Phone</th>
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