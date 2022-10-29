import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//import all components
import StartSurvey from '../StartSurvey/StartSurvey';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';


function App() {

  return (
    <div className='App'>
      
      <Router>
        {/* Routes to each page of the review form */}
        <Route exact path='/'>
          <StartSurvey />
        </Route>

        <Route exact path='/feeling'>
          <Feeling />
        </Route>

        <Route exact path='/understanding'>
          <Understanding />
        </Route>

        <Route exact path='/support'>
          <Support />
        </Route>

        <Route exact path='/comments'>
          <Comments />
        </Route>

        <Route exact path='/review'>
          <Review />
        </Route>

        <Route exact path='/success'>
          <Success />
        </Route>

        

      </Router>
    </div>
  );
}

export default App;
