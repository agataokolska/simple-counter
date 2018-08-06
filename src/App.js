import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Counter from './Counter'


const App = () => (
  <Router>
    <div>
      <Route path={'/'} component={()=><Counter number={0} />} />
    </div>
  </Router>
)

export default App
