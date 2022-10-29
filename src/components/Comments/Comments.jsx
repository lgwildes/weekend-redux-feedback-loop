import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();

    // local state for comment rating 
    let [commentInput, setCommentInput] = useState('')

    //handle number input from client and save to local state
    const handleInputChange = (event) => {
        setCommentInput(event.target.value)
    }

        console.log('comment input is ', commentInput);

    // on submit dispatch local state to redux
    const submit = (event) => {
        event.preventDefault();
        console.log(`dispatching comments `, commentInput);

        dispatch({
            type: 'SET_COMMENT',
            payload: commentInput
        })

        history.push('/review')
    }

    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
        </header>
        <form onSubmit={submit}>
            <h3>Any comments you want to leave?</h3>
                <label>comments</label>
                <input 
                    onChange={handleInputChange}
                    type="text" 
                    className="ratingInput" 
                    />
                <button
                    type='submit'
                    >Next
                </button>
        </form>
        </>
    )
}

export default Comments;