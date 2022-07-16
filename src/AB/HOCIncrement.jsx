import React, { useState } from 'react';

const HOCIncrement = (WrappedComponent) => {
    const EnhencedCompo = ({name}) => {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1);
        };
        return (
            <>
                <WrappedComponent count={count} increment={increment} name={name} />
            </>
        );
    };
    return EnhencedCompo;
};

export default HOCIncrement;
