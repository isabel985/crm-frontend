import React from 'react';

function CompanySearchBar(props) {

    return (
        <div>
            <h3>Company Search</h3>
            <form onSubmit={props.handleSubmit}>
                <label for="">Company</label>
                <input type="text" name="company" id="" className="form-control" placeholder="Company" />
                <label for="">Status</label>
                <input type="text" name="status" id="" className="form-control" placeholder="Status" />
                <label for="">Phone</label>
                <input type="text" name="phone" id="" className="form-control" placeholder="Phone" />
                <label for="">City</label>
                <input type="text" name="city" id="" className="form-control" placeholder="City" />
                <label for="">State</label>
                <input type="text" name="state" id="" className="form-control" placeholder="State" />
                <label for="">Zip Code</label>
                <input type="text" name="zipCode" id="" className="form-control" placeholder="Zip Code" />
                <input type="submit" className="btn btn-secondary btn-block" />
            </form>
        </div>
    )
}

export default CompanySearchBar;