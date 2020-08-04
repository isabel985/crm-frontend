import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NameInfo(props) {
    const [name, setName] = useState({});
    const [nameCompany, setNameCompany] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/name/${props.match.params.id}`).then(res => res.json()).then(data => {
            var name = {
                fName: data.first_name,
                lName: data.last_name,
                status: data.name_status,
                city: data.name_city,
                state: data.name_state,
                zipCode: data.name_zip_code,
                title: data.title,
                phone: data.name_phone,
                email: data.name_email,
                user: data.user_id,
                date: data.name_date_created,
                notes: data.notes,
                resume: data.resume,
                company: data.company_id
            }
            setName(name);

            fetch(`http://localhost:5000/company/${name.company}`).then(res => res.json().then(data => {
                var companyName = data.company_name
                setNameCompany(companyName)
            }))
        })
    }, []);

    // Allows fields to be editable
    function onNameChange(e) {
        setName({
            ...name,
            [e.target.name]: e.target.value
        })
        console.log(name)
    }

    // PUT REQUEST
    function handlePutName(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/name/${props.match.params.id}`, {
            first_name: name.fName,
            last_name: name.lName,
            name_status: name.status,
            name_city: name.city,
            name_state: name.state,
            name_zip_code: name.zipCode,
            title: name.title,
            name_phone: name.phone,
            name_email: name.email,
            user_id: name.user,
            name_date_created: name.date,
            notes: name.notes,
            resume: name.resume,
            company_id: name.company
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(name)

        // insert flag
    }

    // DELETE REQUEST
    function handleDeleteName(e) {
        e.preventDefault();
        axios.delete(`http://localhost:5000/name/${props.match.params.id}`, {})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        // insert alert
        // insert flag
    }

    return (
        <div className="container">
            <form>
                <div className="row">
                    <h3>{name.fName} {name.lName}</h3>
                    <button className="btn" onClick={handlePutName}><i className="fas fa-save"></i></button>
                    <button className="btn" onClick={handleDeleteName}><i className="fas fa-trash-alt"></i></button>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for="">Status</label>
                        <input onChange={onNameChange} type="text" name="status" className="form-control" value={name.status} />
                    </div>
                    <div className="col-md-6">
                        <label for="">City</label>
                        <input onChange={onNameChange} type="text" name="city" className="form-control" value={name.city} />
                    </div>
                    <div className="col-md-6">
                        <label for="">First Name</label>
                        <input onChange={onNameChange} type="text" name="fName" className="form-control" value={name.fName} />
                    </div>
                    <div className="col-md-6">
                        <label for="">State</label>
                        <input onChange={onNameChange} type="text" name="state" className="form-control" value={name.state} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Last Name</label>
                        <input onChange={onNameChange} type="text" name="lName" className="form-control" value={name.lName} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Zip Code</label>
                        <input onChange={onNameChange} type="text" name="zipCode" className="form-control" value={name.zipCode} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Title</label>
                        <input onChange={onNameChange} type="text" name="title" className="form-control" value={name.title} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Company</label>
                        <input onChange={onNameChange} type="text" name="nameCompany" className="form-control" value={nameCompany} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Phone</label>
                        <input onChange={onNameChange} type="text" name="phone" className="form-control" value={name.phone} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Email</label>
                        <input onChange={onNameChange} type="text" name="email" className="form-control" value={name.email} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Created By</label>
                        <input onChange={onNameChange} type="text" name="user" className="form-control" value={name.user} />
                    </div>
                    <div className="col-md-6">
                        <label for="">Created On</label>
                        <input onChange={onNameChange} type="text" name="date" className="form-control" value={name.date} />
                    </div>
                </div>
                <label for="">Notes</label>
                <textarea onChange={onNameChange} className="form-control" value={name.notes} name="notes" aria-label="With textarea"></textarea>
                <label for="">Resume</label>
                <textarea onChange={onNameChange} className="form-control" value={name.resume} name="resume" aria-label="With textarea"></textarea>
            </form>
        </div>
    )
}

export default NameInfo;