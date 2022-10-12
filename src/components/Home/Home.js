import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';
import './Home.css'

const Home = () => {
    const quizData = useLoaderData();
    //console.log(quizData);

    return (
        <Container>
            <div className='quiz-cards'>
            {
                quizData.data.map(quiz => <QuizCard quiz={quiz} key={quiz.id}></QuizCard>
                )
            }
            </div>
        </Container>
    );
};

export default Home;