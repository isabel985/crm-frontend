import React from 'react';
import NameResults from '../components/NameResults';

function NameSearchPage(props) {
    return (
        <div className="container name-search">
            <div className="row">
                <form onSubmit={props.handlePostCompany}>
                    <div className="row">
                        <div className="col-md-12">
                            <h3>{(props.searchedNames.length > 0) ? `${props.searchedNames.length} Names Found` : `Start Searching...`}</h3>
                            {(props.searchedNames.length) ? (<NameResults searchedNames={props.searchedNames} handleShowInfo={props.handleShowInfo} />) : ""}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NameSearchPage;