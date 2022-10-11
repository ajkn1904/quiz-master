import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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

    return (
        <div>
            <h4>{question}</h4>

            <form>
                <fieldset>
                    <input type="radio" name='options' id={options[0]} value={options[0]} onChange={handleChange} checked={ans === options[0]} />
                    <label htmlFor={options[0]}>{options[0]}</label><br />

                    <input type="radio" name='options' id={options[1]} value={options[1]} onChange={handleChange} checked={ans === options[1]} />
                    <label htmlFor={options[1]}>{options[1]}</label><br />

                    <input type="radio" name='options' id={options[2]} value={options[2]} onChange={handleChange} checked={ans === options[2]} />
                    <label htmlFor={options[2]}>{options[2]}</label><br />

                    <input type="radio" name='options' id={options[3]} value={options[3]} onChange={handleChange} checked={ans === options[3]} />
                    <label htmlFor={options[3]}>{options[3]}</label><br />
                    

                </fieldset>
            </form>

            
            <h6>{ans === undefined ? 'Please select an option' : `Your answer is: ${ans}`}</h6>
            
            <ToastContainer />

            
        </div>
    );
};

export default Questions;