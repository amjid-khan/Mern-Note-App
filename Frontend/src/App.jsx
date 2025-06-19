import './App.css'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Signup from './component/signup/Signup'
import Signin from './component/signin/Signin'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
        </Routes>
     </Router>
    </>
  )
}

export default App
