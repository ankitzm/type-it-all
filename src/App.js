import './App.css';
import Challenge from './Component/Challenge';
import Footer from './Component/Footer';
import Landing from './Component/Landing';
import Nav from "./Component/Nav"

function App() {
  return (
    <div className="App flex flex-col">
      <Nav />
      <Landing />
      <Challenge />
      <Footer />
    </div>
  );
}

export default App;
