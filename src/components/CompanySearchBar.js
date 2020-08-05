import React from 'react';

function CompanySearchBar(props) {

    return (
        <div className="search-bar">
            <form onSubmit={props.handleCompanySubmit}>
                <div className="form-row">
                    <div className="col-md-5">
                        <select className="form-control" id="exampleFormControlSelect1" onChange={props.handleCompanySelectChange}>
                            <option value="company_name">COMPANY</option>
                            <option value="company_status">STATUS</option>
                            <option value="company_phone">PHONE</option>
                            <option value="company_city">CITY</option>
                            <option value="company_state">STATE</option>
                            <option value="company_zip_code">ZIP CODE</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input onChange={props.handleCompanyInputChange} type="text" id="" className="form-control" placeholder="Search Here" />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-search"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CompanySearchBar;