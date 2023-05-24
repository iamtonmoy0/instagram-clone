
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
import * as RoutePath from './constants/routes.js'

// lazy loading 
const loginComponent =lazy(()=> import('./pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>  {/* its for loading */}
         <Routes>
           <Route path={RoutePath.DASHBOARD} Component={loginComponent} />        
         </Routes>
    </Suspense>
    </Router>
    
  )
}

export default App;
