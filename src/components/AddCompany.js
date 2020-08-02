import React from 'react';

function AddCompany() {
    return (
        <div className="container">
            <form>
                <div className="row">
                    <h3>Add Company</h3>
                    <input type="submit" className="btn btn-secondary" />
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
                </div>
                <label for="">Notes</label>
                <textarea className="form-control" name="zipCode" aria-label="With textarea"></textarea>

            </form>
        </div>
    )
}

export default AddCompany;