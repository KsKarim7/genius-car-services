import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';

import Footer from './Pages/Shared/Header/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
