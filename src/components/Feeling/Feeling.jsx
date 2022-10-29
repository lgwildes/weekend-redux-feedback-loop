import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';


function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    // local state for feeling rating 
    let [feelingInput, setFeelingInput] = useState(0)

    //handle number input from client and save to local state
    const handleInputChange = (event) => {
        setFeelingInput(Number(event.target.value))
    }

        console.log('feeling input is ', feelingInput);

    // on submit dispatch local state to redux
    const submit = (event) => {
        event.preventDefault();
            if(feelingInput === 0 ){
                alert(`Please let us know how you're feeling`)
            }
            
            else if(feelingInput > 0) {
                dispatch({
                    type: 'SET_FEELING',
                    payload: feelingInput
                })
    
                history.push('/understanding')
            }
        
    
           
         
    }

  
    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
        </header>
        <form onSubmit={submit}>
            <h3>How are you feeling today?</h3>
            <label>feeling?</label>
                <input 
                    onChange={handleInputChange}
                    type="number" 
                    className="ratingInput" 
                    min="1" max="5"/>
                <button
                    type='submit'
                    >Next
                </button>
        </form>
        </>
    )
}

export default Feeling;