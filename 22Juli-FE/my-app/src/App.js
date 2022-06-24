import React from 'react';
import CounterPage from './pages/counter/CounterPage';
import LoginPage from './pages/login/LoginPage';
import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import ShowListPage from './pages/jobs/ShowListPage';
import DetailPage from './pages/jobs/DetailPage';


function App() {
  if(localStorage.getItem('token') != null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<ShowListPage />}/>
          <Route exact path="/home/:id" element={<DetailPage />} />
          

            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element= {<Navigate replace to='/home' />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterPage />}/>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} /> */}
          <Route path="/login" element={<LoginPage />}/>
          <Route path="*" element= {<Navigate replace to='/' />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
    // return (
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path='*' element={<div>TESTING</div>} />
    //   </Routes>
    //   </BrowserRouter>
    // )
}

export default App;
