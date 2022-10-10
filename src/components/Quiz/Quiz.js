import React from 'react';
import { useParams } from 'react-router-dom';

const Quiz = () => {
    let { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>hello quiz{id}</h1>
        </div>
    );
};

export default Quiz;