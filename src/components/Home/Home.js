import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';
import './Home.css'

const Home = () => {
    const quizData = useLoaderData();
    //console.log(quizData);

    return (
        <div>
           
            <header>
                <h3>You can play quiz from this website on some topics & get three extra questions on blog.</h3>
            </header>

            
        <Container>
            <div className='quiz-cards'>
            {
                quizData.data.map(quiz => <QuizCard quiz={quiz} key={quiz.id}></QuizCard>
                )
            }
            </div>
        </Container>
        </div>
    );
};

export default Home;