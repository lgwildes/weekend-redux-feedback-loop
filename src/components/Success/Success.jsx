import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Success() {
    const dispatch = useDispatch();
    const history = useHistory();
   
    const startOver = () => {

        // reset state in index.js
        dispatch({
            type:'CLEAR_FEEDBACK'
        })

        history.push('/')

    }
    return(
        <>
        <div className='success'>
            <h1>Thank you for your feedback!</h1>
            <button
            onClick={startOver}>Leave more feedback</button>
        </div>
        </>
    )
}

export default Success;