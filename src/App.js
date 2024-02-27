import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Cart from './components/layout/Cart';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          
          <Route path='/' element={<Cart />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>


  );
}

export default App;
