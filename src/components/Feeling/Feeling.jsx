import { useHistory } from "react-router-dom";

function Feeling() {

    const history = useHistory();

    // const moveOn = history.push('/understanding')
    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
        </header>
        <form>
            <h3>How are you feeling today?</h3>
                <input type="number" className="ratingInput" min="1" max="5"/>
                {/* <button
                    onClick={moveOn}
            >Next</button> */}
        </form>
        </>
    )
}

export default Feeling;