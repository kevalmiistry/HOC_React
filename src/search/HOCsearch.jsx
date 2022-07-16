import React, { useState, useEffect } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/';

const HOCsearch = (WrappedComponent, entity) => {
    const EnhencedComponent = (props) => {
        const [items, setItems] = useState([]);
        const [term, setTerm] = useState('');

        const fetchItems = async () => {
            const res = await fetch(URL + entity);
            const json = await res.json();
            setItems(json.slice(0, 10));
        };

        useEffect(() => {
            fetchItems();
        }, []);
        let ItemsList = [];

        if (entity === 'users') {
            ItemsList = items
                .filter(({ name }) => {
                    return name.indexOf(term) >= 0;
                })
                .map((item) => {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                        </div>
                    );
                });
        } else if (entity === 'todos') {
            ItemsList = items
                .filter(({ title }) => {
                    return title.indexOf(term) >= 0;
                })
                .map((item) => {
                    return (
                        <div key={item.id}>
                            <p>{item.title}</p>
                        </div>
                    );
                });
        }

        return (
            <div>
                <h1>Search {entity}</h1>
                <input type="text" onChange={(e) => setTerm(e.target.value)} />
                <h1>{entity} List</h1>
                <div>{ItemsList}</div>
            </div>
        );
    };
    return EnhencedComponent;
};

export default HOCsearch;
