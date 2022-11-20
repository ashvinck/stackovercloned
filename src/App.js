import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
// import Header from './Components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import AuthUser from './Components/UserAutentication/Authuser';
import { login, logout, selectUser } from './features/UserAuth/userSlice';
import { auth } from './Firebase-auth';
import Topbar from './Components/Topbar/Topbar';
import moment from 'moment';
import Sidebar from './Components/Sidebar/Sidebar';
import Mainbar from './Components/Mainbar/Mainbar';
import AskQue from './Components/AskQuestion/AskQue';
import TopQue from './Components/TopQuestions/TopQue';
import ViewQue from './Components/ViewQuestions/ViewQue';
import Profilecard from './Components/ProfileCard/Profilecard';
import { Jobs } from './Components/companies/Companies';
import NotfoundPage from './Components/404Notfound/Notfound';
import Tags from './Components/TagsComponent/tagsComponent';


function App() {

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
      <div className="Home container-fluid">
        <div className='row tq1'>
          <div className='Sidebar-container d-none d-sm-none d-md-block '>
            {user ? <Sidebar /> : null}
          </div>
          <div className='Mainbar-container'>
            <Routes>
              <Route path={user ? '/' : '/auth'} element={user ? <Mainbar /> : <AuthUser />} />
              <Route path="/" element={<Navigate replace to='/home' />} />
              <Route path="/home" element={<PrivateRoute> <Mainbar /></PrivateRoute>} />
              <Route path="/add-question" element={<PrivateRoute> <AskQue /> </PrivateRoute>} />
              <Route path="/top-questions" element={<PrivateRoute><TopQue /></PrivateRoute>} />
              <Route path="/home/:id" element={<PrivateRoute> <ViewQue /> </PrivateRoute>} />
              <Route path="/user" element={<PrivateRoute><Profilecard /> </PrivateRoute>} />
              <Route path="/jobs" element={<PrivateRoute> <Jobs /> </PrivateRoute>} />
              <Route path="/tags" element={<PrivateRoute> <Tags /> </PrivateRoute>} />
              <Route path="/auth" element={<AuthUser />} />
              <Route path="/404" element={<NotfoundPage />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;