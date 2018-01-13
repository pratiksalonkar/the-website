import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Case from './Case.jsx'
import Plan from './Plan.jsx'
import Policy from './Policy.jsx'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Case} />
            <Route path='/plan' component={Plan} />
            <Route path='/policy' component={Policy} />
        </Switch>
    </main>
)

export default Main;
