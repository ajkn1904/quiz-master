import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizData = useLoaderData();
    //console.log(quizData);

    return (
        <div>
        {
            quizData.data.map(quiz => <Quiz quiz={quiz} key={quiz.id}></Quiz>
            )
        }
        </div>
    );
};

export default Home;