import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import AddName from './views/AddName';
import Home from './views/Home';
import Sidebar from './components/Sidebar';
import AddCompany from './views/AddCompany';
import NameSearchPage from './views/NameSearchPage';
import CompanySearchPage from './views/CompanySearchPage';
import NameInfo from './views/NameInfo';
import CompanyInfo from './views/CompanyInfo';
import SearchBar from './components/SearchBar';

function App() {
    const [nameSelect, setNameSelect] = useState({ value: "first_name" });
    const [nameInput, setNameInput] = useState({ value: "" });
    const [searchedNames, setSearchedNames] = useState([]);
    const [companySelect, setCompanySelect] = useState({ value: "company_name" });
    const [companyInput, setCompanyInput] = useState({ value: "" });
    const [searchedCompanies, setSearchedCompanies] = useState([]);

    // NAME SEARCH BAR ---------------------------------------------------------------------
    function handleNameSelectChange(e) {
        setNameSelect({ value: e.target.value });
    }

    function handleNameInputChange(e) {
        setNameInput({ value: e.target.value });
    }

    // Redirect to search name
    let nameHistory = useHistory();

    function handleNameSubmit(e) {
        e.preventDefault();
        var nameSelectV = nameSelect.value
        var nameInputV = nameInput.value

        fetch('http://localhost:5000/names').then(res => res.json()).then(data => {
            if (data.names.length) {
                var filteredNames = data.names.filter(name => {
                    if (nameInputV && name[nameSelectV]) {
                        if (nameInputV.toLowerCase() == name[nameSelectV].toString().toLowerCase()) {
                            return name
                        }
                    }
                })
                setSearchedNames(filteredNames)
            }
        });

        // Redirect to search name
        nameHistory.push('/search-name');

        // fix company id to company name
        // change to axios
    }

    // COMPANY SEARCH BAR ---------------------------------------------------------------------
    function handleCompanySelectChange(e) {
        setCompanySelect({ value: e.target.value })
    }
    function handleCompanyInputChange(e) {
        setCompanyInput({ value: e.target.value });
    }

    // Redirect to search company
    let companyHistory = useHistory();

    function handleCompanySubmit(e) {
        e.preventDefault();
        var companySelectV = companySelect.value
        var companyInputV = companyInput.value

        fetch('http://localhost:5000/companies').then(res => res.json()).then(data => {
            if (data.companies.length) {
                var filteredCompanies = data.companies.filter(company => {
                    if (companyInputV && company[companySelectV]) {
                        if (companyInputV.toLowerCase() == company[companySelectV].toString().toLowerCase()) {
                            return company
                        }
                    }
                })
                setSearchedCompanies(filteredCompanies)
            }
        })
        // redirect to search company
        companyHistory.push('/search-company');

        // change to axios
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
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-12">
                                    <SearchBar
                                        handleNameSubmit={handleNameSubmit}
                                        handleNameSelectChange={handleNameSelectChange}
                                        handleNameInputChange={handleNameInputChange}
                                        handleCompanySubmit={handleCompanySubmit}
                                        handleCompanySelectChange={handleCompanySelectChange}
                                        handleCompanyInputChange={handleCompanyInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
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
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
