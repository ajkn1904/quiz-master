import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Questions.css'



const Questions = ({qus}) => {
    const {id, options, question, correctAnswer} = qus;
    
    const [ans, setAns] = useState('');
    
    const handleChange = (e) => {
        setAns(e.target.value);
      }
        
    if(ans){
      if(ans === correctAnswer){
      //console.log("Right");
      toast.success("Correct");
    }      
    else{
      // console.log("Wrong")
      toast.error("Wrong");
      }
    } 

    const iconHandler = () => {
      toast(correctAnswer);
    }

    return (
        <Container className='questions-div'>
          <div className='questions-header'>
            <h4>{question}</h4>
            <span>
              <FontAwesomeIcon icon={faEye} onClick={iconHandler}></FontAwesomeIcon>
            </span>
          </div>


            <form className='options'>
                <fieldset onClick={handleChange}>
                    <input type="radio" name='options' id={options[0]} value={options[0]} checked={ans === options[0]} />
                    <label htmlFor={options[0]}> {options[0]} </label><br />
                    

                    <input type="radio" name='options' id={options[1]} value={options[1]} checked={ans === options[1]} />
                    <label htmlFor={options[1]}> {options[1]} </label><br />
                    

                    <input type="radio" name='options' id={options[2]} value={options[2]} checked={ans === options[2]} />
                    <label htmlFor={options[2]}> {options[2]} </label><br />
                    

                    <input type="radio" name='options' id={options[3]} value={options[3]} checked={ans === options[3]} />
                    <label htmlFor={options[3]}> {options[3]} </label><br />
                    
                    
                    <ToastContainer />
                </fieldset>
            </form>

            
            <h6><span>{ans === undefined ? 'Please select an option' : `Your answer is: ${ans}`}</span></h6>
            
            

            
        </Container>
    );
};

export default Questions;