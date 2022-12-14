import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function Review({submitForm}) {
    //create variables for each response stored in redux
    const feeling = useSelector(store => store.feeling);
    const undestanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comments)

   const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        submitForm({
            feeling: feeling,
            understanding: undestanding,
            support: support,
            comments: comment,

        })
        
        history.push('/success')
    }

    return (
        <>
        <div className='review-info'>
            <h2>Review Your Feedback</h2>
                <h3>Feelings: <span className='feedback'> {feeling} </span></h3>
                <h3>Understanding: <span className='feedback'> {undestanding} </span></h3>
                <h3>Support: <span className='feedback'> {support} </span> </h3>
                <h3>Comments: <span className='feedback'> {comment} </span></h3>

                <button
                onClick={handleSubmit}
                >SUBMIT</button>
        </div>
        </>
    )
}

export default Review;