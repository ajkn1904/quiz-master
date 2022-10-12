import { Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css'

const Quiz = () => {
//   let { id } = useParams();
    
    const quiz = useLoaderData();
    //console.log(quiz.data.questions);

    
    return (
        <div className='quiz-container'>
            
                <h1>{quiz.data.name}</h1>
                {
                    quiz.data.questions.map(question => <Questions qus={question} key={question.id}></Questions>)
                }

            
        </div>
    );
};

export default Quiz;