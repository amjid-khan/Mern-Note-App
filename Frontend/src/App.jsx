import './App.css'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Signup from './component/signup/Signup'
import Signin from './component/signin/Signin'
import Home from './component/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/home' element={<Home />} />
        </Routes>
     </Router>
    </>
  )
}

export default App
