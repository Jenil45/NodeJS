import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/common/Navbar/Navbar';
import Authenticate from './pages/Authenticate/Authenticate';
import LoginRoute from './Auth/ProtectedRoutes/LoginRoute';
import ActivatedRoute from './Auth/ProtectedRoutes/ActivatedRoute';
import Activate from './pages/Activate/Activate';
import ProtectedRoomRoute from './Auth/ProtectedRoutes/ProtectedRoomRoute';
import Rooms from './pages/Rooms/Rooms';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useAutoLogin } from './hooks/useAutoLogin';
import Loading from './components/common/Loading/Loading';
import Room from './pages/Room/Room';
// const isAuth = false;
// const user = {
//   activated : false
// };

function App() {

  const isLoading = useAutoLogin();

  return isLoading ? (<Loading />) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<LoginRoute  />}>
          <Route path='/' element={<Home />} />
        </Route>

        {/* first route which use to login */}
        <Route element={<LoginRoute />}>
          <Route path='/login' element={<Authenticate />} />
        </Route>

        {/* second route use for activation no activated user can't go to protected route room */}
        <Route element={<ActivatedRoute  />}>
          <Route path='/activate' element={<Activate />} />
        </Route>

        {/* third route use for access room user can't go to protected route room if not authenticate or activated */}
        <Route element={<ProtectedRoomRoute />}>
          <Route path='/rooms' element={<Rooms />} />
        </Route>
        <Route element={<ProtectedRoomRoute />}>
          <Route path='/room/:id' element={<Room />} />
        </Route>


      </Routes>    
    </BrowserRouter>
  );
}

export default App;
