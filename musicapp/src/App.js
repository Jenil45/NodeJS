import './App.css';
import Download from './Components/Download';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Search from './Components/Search';

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Navbar />
      <Intro />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
