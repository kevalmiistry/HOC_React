import React from 'react';
import HOCIncrement from './HOCIncrement';

const A = ({count, increment, name}) => {
	return (
        <div>
            <button onClick={increment} >{name} {count} On Click</button>
        </div>
    );
};

export default HOCIncrement(A);
