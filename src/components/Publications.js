import React from 'react';
import Publication from './Publication';

const Publications = ({publicationsList}) => {
    return (
        <div>
            {publicationsList.map((publication, index) => {
                console.log(publication);
                <Publication publication={publication} index={index} />
            })}
        </div>
        
    );
}

export default Publications;