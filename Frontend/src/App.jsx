import './App.css'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Signup from './component/signup/Signup'
import Signin from './component/signin/Signin'
import Home from './component/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import View from './component/view/View'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/view' element={<View />} />
        </Routes>
     </Router>
    </>
  )
}

export default App
