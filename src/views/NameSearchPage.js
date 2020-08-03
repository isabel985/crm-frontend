import React from 'react';
import NameResults from '../components/NameResults';

function NameSearchPage(props) {
    return (
        <>
            <h3>Name Search Page</h3>
            {(props.searchedNames.length) ? (<NameResults searchedNames={props.searchedNames} handleShowInfo={props.handleShowInfo} />) : ""}
        </>
    )
}

export default NameSearchPage;