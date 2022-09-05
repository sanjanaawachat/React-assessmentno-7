import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Navbar from './Pages/Navbar';
import './Css/style.css';
import Student_form from './Components/Student_form';
import Data from "./Components/Data"
import AddStudent from './Components/AddStudent';
import Edit from './Components/Edit'
function App() {
  return (
   <Data> 
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Student_form' element={<Student_form/>}/>
    <Route path='/AddStudent' element={<AddStudent/>}/>
    <Route path='/Edit' element={<Edit/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>

   </BrowserRouter>
   </Data>
  );
}

export default App;

