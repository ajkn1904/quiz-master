import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const Home = () => {
    const quizData = useLoaderData();
    //console.log(quizData);
    const [quizId, setQuizId] = useState(0);


    const quizHandler = (id) => {
        setQuizId(id);
    }


    return (
        <div>
        {
            quizData.data.map(quiz => <QuizCard quiz={quiz} key={quiz.id} quizHandler={quizHandler}></QuizCard>
            )
        }
        </div>
    );
};

export default Home;