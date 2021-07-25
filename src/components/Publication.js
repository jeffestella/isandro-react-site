import React from 'react';

const Publication = ({publication, index}) => {
    // console.log(publication)
    return (
        <h1 index={index}>{publication.fields.publicationName}</h1>
    );
}

export default Publication;