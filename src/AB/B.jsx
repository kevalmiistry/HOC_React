import React from 'react';
import HOCIncrement from './HOCIncrement';

const B = ({count, increment, name}) => {
    return (
        <div>
            <button onMouseOver={increment}>{name} {count} On Mousr Over</button>
        </div>
    );
};

export default HOCIncrement(B);
