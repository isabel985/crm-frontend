import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CompanyInfo(props) {
    const [company, setCompany] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/company/${props.match.params.id}`).then(res => res.json().then(data => {
            var company = {
                coName: data.company_name,
                status: data.company_status,
                phone: data.company_phone,
                city: data.company_city,
                state: data.company_state,
                zipCode: data.company_zip_code,
                notes: data.notes,
                website: data.company_website,
                user: data.user_id,
                date: data.company_date_created
            }
            setCompany(company)
        }))
    }, []);

    // Allows fields to be editable
    function onCompanyChange(e) {
        setCompany({
            ...company,
            [e.target.name]: e.target.value
        })
    }

    // PUT REQUEST
    function handlePutCompany(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/company/${props.match.params.id}`, {
            company_name: company.coName,
            company_status: company.status,
            company_phone: company.phone,
            company_city: company.city,
            company_state: company.state,
            company_zip_code: company.zipCode,
            notes: company.notes,
            company_website: company.website,
            user_id: company.user,
            company_date_created: company.date
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // insert flag
    }

    // DELETE REQUEST
    function handleDeleteCompany(e) {
        e.preventDefault();
        axios.delete(`http://localhost:5000/company/${props.match.params.id}`, {})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // insert flag
    }

    return (
        <div className="container">
            <form>
                <div className="row">
                    <h3>{company.coName}</h3>
                    <button className="btn btn-secondary" onClick={handlePutCompany}>Save</button>
                    <button className="btn btn-secondary" onClick={handleDeleteCompany}>Delete</button>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for="">Status</label>
                        <input onChange={onCompanyChange} name="status" type="text" className="form-control" value={company.status} />
                    </div>
                    <div className="col-md-6">
                        <label for="">City</label>
                        <input onChange={onCompanyChange} name="city" type="text" className="form-control" value={company.city} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Company Name</label>
                        <input onChange={onCompanyChange} name="coName" type="text" className="form-control" value={company.coName} />
                    </div>
                    <div className="col-md-6">
                        <label for="">State</label>
                        <input onChange={onCompanyChange} name="state" type="text" className="form-control" value={company.state} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Phone</label>
                        <input onChange={onCompanyChange} name="phone" type="text" className="form-control" value={company.phone} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Zip Code</label>
                        <input onChange={onCompanyChange} name="zipCode" type="text" className="form-control" value={company.zipCode} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Website</label>
                        <input onChange={onCompanyChange} name="website" type="text" className="form-control" value={company.website} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Created By</label>
                        <input onChange={onCompanyChange} name="user" type="text" className="form-control" value={company.user} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Created On</label>
                        <input onChange={onCompanyChange} name="date" type="text" className="form-control" value={company.date} />
                    </div>
                </div>
                <label for="">Notes</label>
                <textarea onChange={onCompanyChange} name="notes" className="form-control" value={company.notes} aria-label="With textarea"></textarea>
            </form>
        </div>
    )
}

export default CompanyInfo;