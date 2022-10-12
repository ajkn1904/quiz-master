import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './QuizCard.css'

const QuizCard = ({quiz}) => {
    //console.log(quiz);
    const {id, name, logo, total} = quiz;


    return(
        <Card className="card-div">
            
            <div>
                <Card.Img variant="start" src={logo} alt="" className='card-img' />
            </div>
            
            
            <div>
                <Card.Body>
                    <h2>{name}</h2>
                    <Card.Text>
                    Be a pro in {name} quiz!
                    </Card.Text>
                    <small>Total: {total} questions.</small>
                    <br />
                    
                    <Button variant="dark" className="card-btn"><Link to={`/quiz/${id}`} className="card-btn-link">Start Now
                    </Link>
                    </Button>
                </Card.Body>

            </div>
        </Card>
        
    );
};

export default QuizCard;