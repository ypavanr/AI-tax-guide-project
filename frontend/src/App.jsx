import { Route,Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';

import './index.css';
import TaxSlabs from "./TaxSlabs";
import About from "./About"

function App() {
  return<Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/TaxSlabs" element={<TaxSlabs/>}/>
    <Route path="/About" element={<About/>}/>
  </Routes>
  
}

export default App;


