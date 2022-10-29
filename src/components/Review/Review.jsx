import { useHistory } from 'react-router-dom';
import { useSelector,  } from 'react-redux';


function Review({submitForm}) {
    //create variables for each response stored in redux
    const feeling = useSelector(store => store.feeling);
    const undestanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comments)

   
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
        <h2>Review Your Feedback</h2>
            <h3>Feelings: {feeling} </h3>
            <h3>Understanding: {undestanding}</h3>
            <h3>Support: {support} </h3>
            <h3>Comments: {comment} </h3>

            <button
            onClick={handleSubmit}
            >SUBMIT</button>
            
        </>
    )
}

export default Review;