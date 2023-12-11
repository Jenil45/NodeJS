import { Route, Routes } from 'react-router-dom';
import './App.css';
import RoomList from './Components/RoomList/RoomList';
import Room from './Components/Room/Room';
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<RoomList />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
