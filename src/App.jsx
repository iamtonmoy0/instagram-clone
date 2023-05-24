
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
import * as RoutePath from './constants/routes.js'

// lazy loading 
const loginComponent =lazy(()=> import('./pages/Login'));
const signup=lazy(()=>import('./pages/SignUp'));


function App() {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>  {/* its for loading */}
         <Routes>
           <Route path={RoutePath.LOGIN} Component={loginComponent} /> 
            <Route path={RoutePath.SIGNUP} Component={signup} />


        </Routes>
    </Suspense>
    </Router>
    
  )
}

export default App;
