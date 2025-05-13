import { Route,Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import TaxSlabs from "./TaxSlabs";
import About from "./About"

function App() {
  return<Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/taxslabs" element={<TaxSlabs/>}/>
    <Route path="/about" element={<About/>}/>
       
  </Routes>
  
}

export default App;


