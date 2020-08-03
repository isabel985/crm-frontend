import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import AddName from './views/AddName';
import Home from './views/Home';
import Sidebar from './components/Sidebar';
import AddCompany from './views/AddCompany';
import NameSearchPage from './views/NameSearchPage';
import CompanySearchPage from './views/CompanySearchPage';
import NameInfo from './views/NameInfo';
import CompanyInfo from './views/CompanyInfo';

function App() {
    const [searchedCompanies, setSearchedCompanies] = useState("");
    const [searchedNames, setSearchedNames] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        // if any e.target.SOMETHING.values are true
        // and if any of those e.target.SOMETHING.values == any company[SOMETHING]
        // return company

        // console.log(e.target)
        // var company_name = e.target.company.value
        // var company_status = e.target.status.value
        // var company_phone = e.target.phone.value
        // var company_city = e.target.city.value
        // var company_state = e.target.state.value
        // var company_zip_code = e.target.zipCode.value
        // fetch('http://localhost:5000/companies').then(res => res.json()).then(data => {
        //     if (data.companies.length) {
        //         var filteredCompanies = data.companies.filter(company => {
        //             for (i in [company_name, company_status, company_phone, company_city, company_state, company_zip_code]) {
        //                 if (i in data.companies) {
        //                     return company
        //                 }
        //             }
        //         })
        //         setSearchedCompanies(filteredCompanies)
        //     }
        // })
        var companyV = e.target.company.value
        var statusV = e.target.status.value
        var phoneV = e.target.phone.value
        var cityV = e.target.city.value
        var stateV = e.target.state.value
        var zipCodeV = e.target.zipCode.value
        fetch('http://localhost:5000/companies').then(res => res.json()).then(data => {
            if (data.companies.length) {
                var filteredCompanies = data.companies.filter(company => {
                    if (phoneV) {
                        if (
                            phoneV.toLowerCase() == company['company_phone'].toLowerCase()
                        ) {
                            return company
                        }
                    }
                    if (companyV) {
                        if (
                            companyV.toLowerCase() == company['company_name'].toLowerCase()
                        ) {
                            return company
                        }
                    }
                })
                setSearchedCompanies(filteredCompanies)
            }
        })
    }

    function handleNameSubmit(e) {
        e.preventDefault();
        var fNameV = e.target.fName.value
        var lNameV = e.target.lName.value
        var titleV = e.target.title.value
        var companyV = e.target.company.value
        var statusV = e.target.status.value
        var phoneV = e.target.phone.value
        var emailV = e.target.email.value
        var cityV = e.target.city.value
        var stateV = e.target.state.value
        var zipCodeV = e.target.zipCode.value
        console.log(fNameV)
        fetch('http://localhost:5000/names').then(res => res.json()).then(data => {
            if (data.names) {
                var filteredNames = data.names.filter(name => {
                    if (fNameV) {
                        if (fNameV.toLowerCase() == name['first_name'].toLowerCase()) {
                            return name
                        }
                    }
                })
                setSearchedNames(filteredNames)
            }
        })
    }

    // POST NAME
    // MUST PUT IN EVERYTHING EXCEPT STATUS, NOTES, RESUME
    function handlePostName(e) {
        e.preventDefault();
        var fNameV = e.target.fName.value
        var lNameV = e.target.lName.value
        var titleV = e.target.title.value
        var companyV = e.target.company.value
        var statusV = e.target.status.value
        var phoneV = e.target.phone.value
        var emailV = e.target.email.value
        var cityV = e.target.city.value
        var stateV = e.target.state.value
        var zipCodeV = e.target.zipCode.value
        var notesV = e.target.notes.value

        axios.post('http://localhost:5000/name', {
            name_status: statusV,
            first_name: fNameV,
            last_name: lNameV,
            title: titleV,
            name_phone: phoneV,
            name_email: emailV,
            name_city: cityV,
            name_state: stateV,
            name_zip_code: zipCodeV,
            company_id: companyV,
            user_id: 1,
            notes: notesV
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // MUST PUT IN ALL FIELD EXCEPT STATUS AND NOTES
    function handlePostCompany(e) {
        e.preventDefault();
        var companyV = e.target.company.value
        var statusV = e.target.status.value
        var phoneV = e.target.phone.value
        var cityV = e.target.city.value
        var stateV = e.target.state.value
        var zipCodeV = e.target.zipCode.value
        var notesV = e.target.notes.value
        var websiteV = e.target.website.value

        axios.post('http://localhost:5000/company', {
            company_city: cityV,
            company_name: companyV,
            company_phone: phoneV,
            company_state: stateV,
            company_status: statusV,
            company_website: websiteV,
            company_zip_code: zipCodeV,
            notes: notesV,
            user_id: 1
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar handleSubmit={handleSubmit} handleNameSubmit={handleNameSubmit} />
                        </div>
                        <div className="col-md-9">
                            <Switch>
                                <Route exact path='/' render={() => <Home />} />
                                <Route exact path='/add-name' render={() => <AddName handlePostName={handlePostName} />} />
                                <Route exact path='/add-company' render={() => <AddCompany handlePostCompany={handlePostCompany} />} />
                                <Route exact path='/search-company' render={() => <CompanySearchPage searchedCompanies={searchedCompanies} />} />
                                <Route exact path='/search-name' render={() => <NameSearchPage searchedNames={searchedNames} />} />
                                <Route exact path='/name/:id' render={({ match }) => <NameInfo match={match} searchedNames={searchedNames} />} />
                                <Route exact path='/company/:id' render={({ match }) => <CompanyInfo match={match} searchedCompanies={searchedCompanies} />} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
