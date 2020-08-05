import React from 'react';

function NameSearchBar(props) {
    return (
        <div className="search-bar">
            <form onSubmit={props.handleNameSubmit}>
                <div className="form-row">
                    <div className="col-md-5">
                        <select className="form-control" id="exampleFormControlSelect1" onChange={props.handleNameSelectChange}>
                            <option value="first_name">FIRST NAME</option>
                            <option value="last_name">LAST NAME</option>
                            <option value="title">TITLE</option>
                            <option value="company_id">COMPANY</option>
                            <option value="name_status">STATUS</option>
                            <option value="name_phone">PHONE</option>
                            <option value="name_email">EMAIL</option>
                            <option value="name_city">CITY</option>
                            <option value="name_state">STATE</option>
                            <option value="name_zip_code">ZIP CODE</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input onChange={props.handleNameInputChange} type="text" className="form-control" placeholder="Search Here" />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-search"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NameSearchBar;