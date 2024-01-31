import './App.css';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Routes , Route, BrowserRouter  } from 'react-router-dom';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
            
          <Route path='/adduser' element={<AddUser />}></Route>
            
          <Route path='/alluser' element={<AllUser />}></Route>

          <Route path='/edituser/:id' element={<EditUser />}></Route>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
