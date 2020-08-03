import React from 'react';
import { Link } from 'react-router-dom';

function CompanyResultsItem(props) {
    var name = props.company['company_name'];
    var city = props.company['company_city'];
    var state = props.company['company_state'];
    var website = props.company['company_website'];
    var phone = props.company['company_phone'];

    return (
        <tr>
            <th scope="row"><Link to={`company/${props.company.company_id}`}>{name}</Link></th>
            <td>{city}, {state}</td>
            <td>{website}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default CompanyResultsItem