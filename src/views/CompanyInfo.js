import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CompanyInfo(props) {
    const [company, setCompany] = useState({});
    const [username, setUsername] = useState("");

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

            fetch(`http://localhost:5000/user/${company.user}`).then(res => res.json().then(data => {
                var username = data.username;
                setUsername(username);
            }))
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
        var res = window.confirm('Are you sure you would like to delete?');
        if (res) {
            axios.delete(`http://localhost:5000/company/${props.match.params.id}`, {})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        // insert alert
        // insert flag
    }

    return (
        <div className="container company-info">
            <div className="row">
                <form>
                    <div className="row">
                        <div className="col">
                            <h3>{company.coName}</h3>
                        </div>
                        <div className="col">
                            <button className="btn btn-right" onClick={handlePutCompany}><i className="fas fa-save"></i></button>
                            <button className="btn btn-right" onClick={handleDeleteCompany}><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label for="status">Status</label>
                            <select id="status" name="status" className="form-control" id="exampleFormControlSelect1" onChange={onCompanyChange} value={company.status}>
                                <option value="">Select Status</option>
                                <option value="client">Client</option>
                                <option value="do_not_contact">Do Not Contact</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="city">City</label>
                            <input id="city" onChange={onCompanyChange} name="city" type="text" className="form-control" value={company.city} />
                        </div>
                        <div className="col-md-6">
                            <label for="name">Company Name</label>
                            <input id="name" onChange={onCompanyChange} name="coName" type="text" className="form-control" value={company.coName} />
                        </div>
                        <div className="col-md-6">
                            <label for="state">State</label>
                            <input id="state" onChange={onCompanyChange} name="state" type="text" className="form-control" value={company.state} />
                        </div>
                        <div className="col-md-6">
                            <label for="phone">Phone</label>
                            <input id="phone" onChange={onCompanyChange} name="phone" type="text" className="form-control" value={company.phone} />
                        </div>
                        <div className="col-md-6">
                            <label for="zip">Zip Code</label>
                            <input id="zip" onChange={onCompanyChange} name="zipCode" type="text" className="form-control" value={company.zipCode} />
                        </div>
                        <div className="col-md-6">
                            <label for="web">Website</label>
                            <input id="web" onChange={onCompanyChange} name="website" type="text" className="form-control" value={company.website} />
                        </div>
                        <div className="col-md-6">
                            <label for="user">Created By</label>
                            <input id="user" name="user" type="text" className="form-control" value={username} />
                        </div>
                        <div className="col-md-6">
                            <label for="date">Created On</label>
                            <input id="date" onChange={onCompanyChange} name="date" type="text" className="form-control" value={company.date} />
                        </div>
                    </div>
                    <label for="notes">Notes</label>
                    <textarea id="notes" onChange={onCompanyChange} name="notes" className="form-control" value={company.notes} aria-label="With textarea"></textarea>
                </form>
            </div>
        </div>
    )
}

export default CompanyInfo;