import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AddName from './components/AddName';
import Home from './views/Home';
import Sidebar from './components/Sidebar';
import AddCompany from './components/AddCompany';
import NameSearchPage from './views/NameSearchPage';
import CompanySearchPage from './views/CompanySearchPage';

function App() {
    const [searchedCompanies, setSearchedCompanies] = useState("");
    const [searchedNames, setSearchedNames] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        const companyV = e.target.company.value
        const statusV = e.target.status.value
        const phoneV = e.target.phone.value
        const cityV = e.target.city.value
        const stateV = e.target.state.value
        const zipCodeV = e.target.zipCode.value

        fetch('http://localhost:5000/companies').then(res => res.json()).then(data => {
            if (data.companies) {
                var filteredCompanies = data.companies.filter(company => {
                    if (companyV) {
                        if (companyV.toLowerCase() == company['company_name'].toLowerCase()) {
                            return company
                        }
                        // } else if (statusV) {
                        //     if (statusV.toLowerCase() == company['company_status'].toLowerCase()) {
                        //         return company
                        //     }
                        // }

                        // var critera = [companyV, statusV, phoneV, cityV, stateV, zipCodeV]

                        // for (i in critera) {
                        //     if (i) {

                        //     }
                    }
                })
                setSearchedCompanies(filteredCompanies)
            }
        })
    }

    function handleNameSubmit(e) {
        e.preventDefault();
        const fNameV = e.target.fName.value
        const lNameV = e.target.lName.value
        const titleV = e.target.title.value
        const companyV = e.target.company.value
        const statusV = e.target.status.value
        const phoneV = e.target.phone.value
        const emailV = e.target.email.value
        const cityV = e.target.city.value
        const stateV = e.target.state.value
        const zipCodeV = e.target.zipCode.value
        console.log(fNameV)
        fetch('http://localhost:5000/companies').then(res => res.json()).then(data => {
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

    // useEffect(() => {
    //     fetch('http://localhost:5000/search_company').then(res => res.json()).then(data => {
    //         // console.log(data)
    //         setSearchedCompanies(data.companies);
    //     })
    // }, []);



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
                                <Route exact path='/add-name' render={() => <AddName />} />
                                <Route exact path='/add-company' render={() => <AddCompany />} />
                                <Route exact path='/search-name' render={() => <NameSearchPage />} />
                                <Route exact path='/search-company' render={() => <CompanySearchPage searchedCompanies={searchedCompanies} />} />

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
