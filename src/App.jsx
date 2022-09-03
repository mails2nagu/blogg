import './App.css';
import {BrowserRouter, Routes, Route,  } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Post1 from './Post1';
function App() {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/blposts/:id" element={<Post1 />} />

</Routes>
</BrowserRouter>

    
    <Footer/>
    </>
  );
}

export default App;
