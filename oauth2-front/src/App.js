import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import OAuth2Register from './pages/Register/OAuth2Register';
import OAuth2Merge from './pages/OAuth2Merge/OAuth2Merge';
import Index from './pages/Index/Index';
import OAuth2Login from './pages/Login/OAuth2Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' />
        <Route path='/auth/oauth2/login' element={<OAuth2Login />}/>
        <Route path='/auth/oauth2/register' element={<OAuth2Register />}/>
        <Route path='/auth/oauth2/merge' element={<OAuth2Merge />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
