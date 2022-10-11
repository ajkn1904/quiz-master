import React from 'react';
import { Container, Accordion } from 'react-bootstrap'


const Blog = () => {
    return (
        <div>
            <Container>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the propose of react router?
                        </Accordion.Header>
                        <Accordion.Body>
                        Ans: ReactJS Router is mainly used for developing Single Page Web Applications. React Router isn't just about matching a url to a function or component. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

                        </Accordion.Body>
                    </Accordion.Item>

                    <br/>
                
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How does context API work?</Accordion.Header>
                        <Accordion.Body>
                        Ans: Context provides a way to pass data through the component tree without having to pass props down manually at every level. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                        </Accordion.Body>
                    </Accordion.Item>
                
                    <br/>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Usage of useHref() hooks?</Accordion.Header>
                        <Accordion.Body>
                        Ans: The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. The error "useHref() may be used only in the context of a Router component" occurs when we try to use a Link component outside of the Router

                        </Accordion.Body>
                    </Accordion.Item>
                
                </Accordion>
            </Container>
        </div>
    );
};

export default Blog;
