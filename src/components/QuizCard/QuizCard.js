import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const QuizCard = ({quiz}) => {
    //console.log(quiz);
    const {id, name, logo, total} = quiz;


    return (
        <Card style={{ width: '18rem', border: '1px solid gray', borderRadius: '8px', margin: '10px' }}>
            
            <Card.Img variant="top" style={{height: '200px', width: '100%', border: '1px solid lightgray', borderRadius: '8px',}} src={logo} alt="" />
            
            <Card.Body>
                <h2>{name}</h2>
                <Card.Text>
                Be a pro in {name} quiz!
                </Card.Text>
                <small>Total: {total} questions.</small>
                 
                <Button variant="primary"><Link to={`/quiz/${id}`}>Start Now
                </Link>
                </Button>
            </Card.Body>

        </Card>
        
    );
};

export default QuizCard;