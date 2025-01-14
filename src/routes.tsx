import {Routes as Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route path='/'
        element={ <Home/> }
      />

      <Route path='*'
        element={ <NotFound/> }
      />
    </Switch>
  )
}

export default Routes