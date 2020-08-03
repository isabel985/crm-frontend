import React, { useState } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

function NameResultsItem(props) {
    const [nameCompany, setNameCompany] = useState("");

    var fName = props.name['first_name'];
    var lName = props.name['last_name'];
    var title = props.name['title'];
    var company = props.name['company_id'];
    var phone = props.name['name_phone'];
    var email = props.name['name_email'];
    var city = props.name['name_city'];
    var state = props.name['name_state'];


    fetch(`http://localhost:5000/company/${company}`).then(res => res.json().then(data => {
        var companyName = data.company_name
        setNameCompany(companyName)
    }))

    return (
        <tr>
            <th scope="row"><Link to={`name/${props.name.name_id}`}>{fName} {lName}</Link></th>
            <td>{title}</td>
            <td>{nameCompany}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{city}, {state}</td>
        </tr>
    )
}

export default NameResultsItem;