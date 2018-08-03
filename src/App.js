import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Counter from './Counter'
import Test from './Test'

const App = () => (
  <Router>
    <div>
      <Route path={'/test'} component={Test}/>
      <Route path={'/counter'} component={()=><Counter number={0} />} />
    </div>
  </Router>
)

export default App
