import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Student from './components/Student';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Data from './components/Data';
import Addnew from './components/Addnew';
import Edit from './components/Edit';



function App() {
  return (
    <Data>
    <div className="App">
      
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/addnew' element={<Addnew/>}/>
      <Route path='/edit' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    </Data>
  );
}
export default App;
