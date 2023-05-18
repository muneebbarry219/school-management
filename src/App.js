import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/Login';
import Signup from './pages/Signup';
import GetStarted from './pages/GetStarted';
import Welcome from './pages/Welcome';
import Protected from './components/Protected';

function App() {
  return (
    < >

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='/welcome' element={<Protected Component={Welcome} />} /> */}

          <Route element={<Protected isLogged={localStorage.getItem('login')} />}>
            <Route path='/welcome' element={<Welcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
