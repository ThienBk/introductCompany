import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import { Route, Routes } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Banner from './component/Banner';
import Footer from './component/footer';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#999"}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
