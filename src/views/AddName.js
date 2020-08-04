import React from 'react';

function AddName(props) {
    return (
        <div className="container">
            <form onSubmit={props.handlePostName}>
                <div className="row">
                    <h3>Add Name</h3>
                    <button type="submit" className="btn"><i className="fas fa-save"></i></button>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for="">Status</label>
                        <input type="text" name="status" id="" className="form-control" placeholder="Status" />
                    </div>
                    <div className="col-md-6">
                        <label for="">City</label>
                        <input type="text" name="city" id="" className="form-control" placeholder="City" />
                    </div>
                    <div className="col-md-6">
                        <label for="">First Name</label>
                        <input type="text" name="fName" id="" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-6">
                        <label for="">State</label>
                        <input type="text" name="state" id="" className="form-control" placeholder="State" />
                    </div>
                    <div className="col-md-6">
                        <label for="">Last Name</label>
                        <input type="text" name="lName" id="" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6">
                        <label for="">Zip Code</label>
                        <input type="text" name="zipCode" id="" className="form-control" placeholder="Zip Code" />
                    </div>
                    <div className="col-md-6">
                        <label for="">Title</label>
                        <input type="text" name="title" id="" className="form-control" placeholder="Title" />
                    </div>
                    <div className="col-md-6">
                        <label for="">Company</label>
                        <input type="text" name="company" id="" className="form-control" placeholder="Company" />
                    </div>
                    <div className="col-md-6">
                        <label for="">Phone</label>
                        <input type="text" name="phone" id="" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="col-md-6">
                        <label for="">Email</label>
                        <input type="email" name="email" id="" className="form-control" placeholder="Email" />
                    </div>
                </div>
                <label for="">Notes</label>
                <textarea className="form-control" name="notes" aria-label="With textarea"></textarea>
            </form>
        </div>
    )
}

export default AddName;