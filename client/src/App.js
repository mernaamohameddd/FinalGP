import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";
import Landing from "./components/Landing";
import Landing2 from "./components/Landing2";
import Landing3 from "./components/Landing3";
import Home from "./components/Home";
import Courses from "./components/Courses";
import UserLevels from './components/UserLevels';
import AuthProvider from './store/AuthProvider';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import StudentHome from './components/StudentHome';
import TeacherHome from './components/TeacherHome';
import Feedback from './components/Feedback';
import Chat from './components/Chat';
import CPage from './components/CPage';
import PythonPage from './components/PythonPage';
import JPAGE from './components/JPage';
import RetieveStudent from './components/RetrieveStudent';
import { useAuth } from './store/AuthProvider';
import TimedExcercise from './components/TimedExcercise';
import Videos from './components/Videos';
import CVideo from './components/CVideo';
import PVideo from './components/PVideo';
import JVideo from './components/JVideo';
import Landing4 from './components/Landing4';
import Landing5 from './components/Landing5';
// import Landing2 from "./components/Landing2";
// const dotenv = require('dotenv');
// dotenv.config(
//   {
//       path: '/.env'
//   }
// );

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
<Route path="/Landing1" element={<Landing />} />
<Route path="/Landing2" element={<Landing2 />} />
<Route path="/Landing3" element={<Landing3 />} />
<Route path="/Courses" element={<Courses />} />
<Route path="/UserLevels" element={<UserLevels/>} />
<Route path="/signup" element={<SignupPage />} />
 <Route path="/signin" element={<SigninPage />} />
 <Route path="/student" element={<StudentHome />}/>
 <Route path="/teacher" element={<TeacherHome />}/>
 <Route path="/Feedback" element={<Feedback />}/>
 <Route path="/chat" element={<Chat />}/>
 <Route path='/cplusplus' element={<CPage />}/>
 <Route path='/python' element={<PythonPage />}/>
 <Route path='/java' element={<JPAGE />}/>
 <Route path='/studenttt' element={<RetieveStudent />}/>
 <Route path='/timed' element={<TimedExcercise />}/>
 <Route path='/videos' element={<Videos />}/>
 <Route path='/cvideos' element={<CVideo />}/>
 <Route path='/pvideos' element={<PVideo />}/>
 <Route path='/jvideos' element={<JVideo />}/>
 <Route path='/Landing4' element={<Landing4 />}/>
 <Route path='/Landing5' element={<Landing5 />}/>
<Route path= "/" element={<Home/>} />

</Routes>
    
    </BrowserRouter>
    </AuthProvider>
  )

}

function PrivateRoute({ component, ...props }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    React.createElement(component, props)
  ) : (
    <Navigate to="/signin" replace />
  );
}

export default App;
