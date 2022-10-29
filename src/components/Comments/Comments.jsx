import { useHistory } from "react-router-dom";

function Comments() {

    const history = useHistory();

    // const moveOn = history.push('/understanding')
    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
        </header>
        <form>
            <h3>Any comments you want to leave?</h3>
                <input type="text" className="ratingInput" />
                {/* <button
                    onClick={moveOn}
            >Next</button> */}
        </form>
        </>
    )
}

export default Comments;