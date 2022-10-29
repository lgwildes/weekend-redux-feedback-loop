import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    // local state for understanding rating 
    let [understandingInput, setUnderstandingInput] = useState(0)

    //handle number input from client and save to local state
    const handleInputChange = (event) => {
        setUnderstandingInput(Number(event.target.value))
    }

        console.log('understanding input is ', understandingInput);

    // on submit dispatch local state to redux
    const submit = (event) => {
        event.preventDefault();

            if(understandingInput === 0 ) {
                alert(`Please let us know your level of understanding`)
            }

            else if(understandingInput > 0) {
                dispatch({
                    type: 'SET_UNDERSTANDING',
                    payload: understandingInput
                })
        
                history.push('/support')
            }
        
    }

    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
        </header>
        <form onSubmit={submit}>
            <h3>How well are you understanding the content?</h3>
            <label>understanding?</label>
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

export default Understanding;