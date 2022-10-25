import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Pages/Home/HomePage';
// import Header from './Components/Header/Header';
import AskQuestions from './Pages/AskQuestions/AskQuestions';
import TopQuestions from './Pages/TopQuestions/TopQuestions';
import ViewQuestions from './Pages/ViewQuestions/ViewQuestions';
import { useDispatch, useSelector } from 'react-redux';
import AuthUser from './Pages/UserAutentication/Authuser';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './Firebase-auth';
import Topbar from './Components/Topbar/Topbar';
import Profilepage from './Pages/ProfilePage/ProfilePage.jsx';


function App() {
  // User state is null then redirect to auth page
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
            screenName: authUser.screenName,
          })
        );
      }
      else {
        dispatch(logout());
      }
    });
  }, [dispatch])


  // Adding  a private route for preventing unauhtorized access
  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/auth" />;
  }


  return (
    <div className="App">
      {/* <Header /> */}
      <Topbar />
      <Routes>
        <Route path={user ? '/' : '/auth'} element={user ? <Home /> : <AuthUser />} />
        <Route path="/" element={<PrivateRoute> <Home /></PrivateRoute>} />
        <Route path="/add-question" element={<PrivateRoute> <AskQuestions /> </PrivateRoute>} />
        <Route path="/top-questions" element={<PrivateRoute><TopQuestions /></PrivateRoute>} />
        <Route path="/question" element={<PrivateRoute> <ViewQuestions /> </PrivateRoute>} />
        <Route path="/user" element={<PrivateRoute><Profilepage /> </PrivateRoute>} />
        <Route path="/auth" element={<AuthUser />} />
      </Routes>
    </div>
  );
}

export default App;