import React from 'react';

function NameSearchBar(props) {
    return (
        <div>
            <h3>Name Search</h3>
            <form onSubmit={props.handleNameSubmit}>
                <label for="">First Name</label>
                <input type="text" name="fName" id="" className="form-control" placeholder="First Name" />
                <label for="">Last Name</label>
                <input type="text" name="lName" id="" className="form-control" placeholder="Last Name" />
                <label for="">Title</label>
                <input type="text" name="title" id="" className="form-control" placeholder="Title" />
                <label for="">Company</label>
                <input type="text" name="company" id="" className="form-control" placeholder="Company" />
                <label for="">Status</label>
                <input type="text" name="status" id="" className="form-control" placeholder="Status" />
                <label for="">Phone</label>
                <input type="text" name="phone" id="" className="form-control" placeholder="Phone" />
                <label for="">Email</label>
                <input type="text" name="email" id="" className="form-control" placeholder="Email" />
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

export default NameSearchBar;