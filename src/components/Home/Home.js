import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const Home = () => {
    const quizData = useLoaderData();
    //console.log(quizData);

    return (
        <div>
        {
            quizData.data.map(quiz => <QuizCard quiz={quiz} key={quiz.id}></QuizCard>
            )
        }
        </div>
    );
};

export default Home;