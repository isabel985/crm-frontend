import React from 'react';

function CompanySearchBar(props) {

    return (
        <div>
            <h3>Company Search</h3>
            <form onSubmit={props.handleCompanySubmit}>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Select Criteria</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={props.handleCompanySelectChange}>
                        <option value="company_name">Company</option>
                        <option value="company_status">Status</option>
                        <option value="company_phone">Phone</option>
                        <option value="company_city">City</option>
                        <option value="company_state">State</option>
                        <option value="company_zip_code">Zip Code</option>
                    </select>
                    <input onChange={props.handleCompanyInputChange} type="text" id="" className="form-control" />
                    <input type="submit" className="btn btn-secondary btn-block" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default CompanySearchBar;