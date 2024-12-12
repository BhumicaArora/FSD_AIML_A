import { useState } from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import Logout from './Components/logout'
function App() {
  const [regData, setRegData]=useState(null);
  const [count, setCount] = useState(0)
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/login" element={<Login regData={regData}/>}></Route>
        <Route path="/register" element={<Register setregData={setRegData}/>}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard regdash={regData}/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="*" element={<h1>No page available</h1>}></Route>
      </Routes>
    </div>
  )
}
export default App
