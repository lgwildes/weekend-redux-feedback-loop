import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {  useDispatch } from 'react-redux';

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();

    // local state for support rating 
    let [supportInput, setSupportInput] = useState(0)

    //handle number input from client and save to local state
    const handleInputChange = (event) => {
        setSupportInput(Number(event.target.value))
    }

        console.log('support input is ', supportInput);

    // on submit dispatch local state to redux
    const submit = (event) => {
        event.preventDefault();
       
        if(supportInput === 0 ) {
            alert(`Please let us know how supported you are feeling`)
        }
        
        else if (supportInput > 0) {
            dispatch({
                type: 'SET_SUPPORT',
                payload: supportInput
            })
    
            history.push('/comments')
        }
       
    }

    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
        </header>
        <form onSubmit={submit}>
            <h3>How are you being supported?</h3>
                <label>supported?</label>
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

export default Support;