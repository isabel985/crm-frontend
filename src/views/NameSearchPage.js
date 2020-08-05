import React from 'react';
import NameResults from '../components/NameResults';

function NameSearchPage(props) {
    return (
        <div className="container name-search">
            <div className="row">
                <form onSubmit={props.handlePostCompany}>
                    <div className="row">
                        <div className="col-md-12">
                            <p>{(props.searchedNames.length > 0) ? `Names Found: ${props.searchedNames.length}` : `Start Searching...`}</p>
                            {(props.searchedNames.length) ? (<NameResults searchedNames={props.searchedNames} handleShowInfo={props.handleShowInfo} />) : ""}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NameSearchPage;