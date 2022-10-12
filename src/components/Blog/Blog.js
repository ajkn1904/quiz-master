import React from 'react';
import { Container, Accordion } from 'react-bootstrap'


const Blog = () => {
    return (
        <div>
            <Container>
                <h1>Quizzy Blog </h1>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the propose of react router?
                        </Accordion.Header>
                        <Accordion.Body>
                        ReactJS Router is mainly used for developing Single Page Web Applications. React Router isn't just about matching a url to a function or component. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

                        </Accordion.Body>
                    </Accordion.Item>

                    <br/>
                
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How does context API work?</Accordion.Header>
                        <Accordion.Body>
                        Context provides a way to pass data through the component tree without having to pass props down manually at every level. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also considered as an easier, lighter approach to state management using Redux.

                        </Accordion.Body>
                    </Accordion.Item>
                
                    <br/>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Usage of useRef() hooks?</Accordion.Header>
                        <Accordion.Body>
                        The useRef() hooks returns a mutable ref object whose current property is initialized to the passed argument ( initialValue ). It can be used to store a mutable value that does not cause a re-render when updated, access a DOM element directly. If you need some kind of data container throughout the component's lifecycle without causing render cycles on mutating your variable, then useRef() is your solution.

                        </Accordion.Body>
                    </Accordion.Item>
                
                </Accordion>
            </Container>
        </div>
    );
};

export default Blog;
