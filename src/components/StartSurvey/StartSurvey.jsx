import { useHistory } from "react-router-dom";

function StartSurvey() {

    const history = useHistory();

    // go to feeling page
    const startSurvey =  () => {
        history.push('/feeling')
    }
    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
        </header>
        <div className="feedback-container">
            <h3>Good work today!</h3>
                <h4>let us know how you're doing.</h4>
                <button
                onClick={startSurvey}
                >Start Survey</button>
        </div>
        </>
    )
}

export default StartSurvey;
