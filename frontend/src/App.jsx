import { Route,Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
// import { Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import TaxSlabs from "./TaxSlabs";

function App() {
  return<Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/TaxSlabs" element={<TaxSlabs/>}/>
  </Routes>
  
}

export default App;


