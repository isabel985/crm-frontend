import React from 'react';
import NameRows from './NameRows';

function NameResults(props) {
    return (
        <div>
            Name Result(s): {props.searchedNames.length}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Company</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Location</th>
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