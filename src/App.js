import logo from './logo.svg';
import './App.css';
import Header from './Components/Home/Header';
import Home from './Components/Home/Home';
import Properties from './Components/Home/Properties';
import About from './Components/Home/About';
import Citation from './Components/Home/Citation';
import Services from './Components/Home/Services';

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <Properties />
      <About />
      <Citation />
      <Services />
    </div>
  );
}

export default App;
