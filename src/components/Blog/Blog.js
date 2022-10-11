import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Blog = () => {
    return (
        <div style={{width: 700, padding: 30 }}>
        <h4>React-Bootstrap Accordion Component</h4>
        <Accordion defaultActiveKey="0">
            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button}
                variant="link" eventKey="0">
                Click Me to Toggle!
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                Greetings from GeeksforGeeks
                </Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>
    );
};

export default Blog;

/*
import 'bootstrap/dist/css/bootstrap.css';

}
 */