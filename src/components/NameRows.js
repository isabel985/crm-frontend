import React from 'react';
import NameResultsItem from './NameResultsItem';

function NameRows(props) {
    return (
        <>
            {(props.names) ? (props.names.map(name => <NameResultsItem key={name.name_id} name={name} handleShowInfo={props.handleShowInfo} />)) : []}
        </>
    )
}

export default NameRows;