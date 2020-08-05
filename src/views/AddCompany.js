import React from 'react';

function AddCompany(props) {
    return (
        <div className="container add-company">
            <div className="row">
                <form onSubmit={props.handlePostCompany}>
                    <div className="row">
                        <div className="col">
                            <h3>Add Company</h3>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-right"><i className="fas fa-save"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label for="">Status</label>
                            <select id="status" name="status" className="form-control" id="exampleFormControlSelect1">
                                <option value="">Select Status</option>
                                <option value="client">Client</option>
                                <option value="do_not_contact">Do Not Contact</option>
                            </select></div>
                        <div className="col-md-6">
                            <label for="">City</label>
                            <input type="text" name="city" id="" className="form-control" placeholder="City" />
                        </div>
                        <div className="col-md-6">
                            <label for="">Company Name</label>
                            <input type="text" name="company" id="" className="form-control" placeholder="Company Name" />
                        </div>
                        <div className="col-md-6">
                            <label for="">State</label>
                            <input type="text" name="state" id="" className="form-control" placeholder="State" />
                        </div>
                        <div className="col-md-6">
                            <label for="">Phone</label>
                            <input type="text" name="phone" id="" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="col-md-6">
                            <label for="">Zip Code</label>
                            <input type="text" name="zipCode" id="" className="form-control" placeholder="Zip Code" />
                        </div>
                        <div className="col-md-6">
                            <label for="">Website</label>
                            <input type="text" name="website" id="" className="form-control" placeholder="Website" />
                        </div>
                        <div className="col-md-12">
                            <label for="">Notes</label>
                            <textarea className="form-control" name="notes" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCompany;