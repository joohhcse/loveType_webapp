import React, { useState } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home';

function App(props) {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
            </div>
        </Router>
    );
}

export default App;