import React from 'react';

function NameSearchBar(props) {
    return (
        <div>
            <h3>Name Search</h3>
            <form onSubmit={props.handleNameSubmit}>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Select Criteria</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={props.handleNameSelectChange}>
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                        <option value="title">Title</option>
                        <option value="company_id">Company Id</option>
                        <option value="name_status">Status</option>
                        <option value="name_phone">Phone</option>
                        <option value="name_email">Email</option>
                        <option value="name_city">City</option>
                        <option value="name_state">State</option>
                        <option value="name_zip_code">Zip Code</option>
                    </select>
                    <input onChange={props.handleNameInputChange} type="text" name="nameInput" id="" className="form-control" />
                    <input type="submit" className="btn btn-secondary btn-block" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default NameSearchBar;