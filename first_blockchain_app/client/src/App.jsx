import "./App.css";
import { Navbar, Footer, Welcome, Provides, Transactions } from "./components";

function App() {
  return (
    <div>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Provides />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
