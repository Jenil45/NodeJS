import './App.css';
import Homepage from './Components/HomePage/Homepage';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [loggedIn , setLoggedIn] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={loggedIn && loggedIn._id ?<Homepage name={loggedIn.name} setPermision={setLoggedIn} />:<Login setPermision={setLoggedIn} />}>
          </Route>
          <Route path="/login" element={<Login setPermision={setLoggedIn} />}>
          </Route>
          <Route path="/signup" element={<Signup />}>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
