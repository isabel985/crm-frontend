import React from 'react';
import NameRows from './NameRows';

function NameResults(props) {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">COMPANY</th>
                        <th scope="col">PHONE</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                    <NameRows names={props.searchedNames} handleShowInfo={props.handleShowInfo} />
                </tbody>
            </table>
        </div>
    )
}

export default NameResults;