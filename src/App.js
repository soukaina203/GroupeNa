import logo from './logo.svg';
import './App.css';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import Home from './Components/Home/Home';
import Properties from './Components/Home/Properties';
import About from './Components/Home/About';

function App() {
  return (
    <div className="">
<Header/>   
<Home />
<Properties />
<About />
<Footer /> 
    </div>
  );
}

export default App;
