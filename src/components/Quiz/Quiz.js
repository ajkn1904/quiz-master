import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    console.log(quiz);
    const {name, logo, total} = quiz
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} alt="" />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Be a pro in {name} quiz!
            </Card.Text>
            <small>Total {total} quizes.</small>
            <Button variant="primary"> 
{/*             <Link to='/{name}'>Start Now</Link> */}
Start Now</Button>
        </Card.Body>
        </Card>   
        
    );
};

export default Quiz;