
import React from 'react'
import '../css/App.css';

import Login from '../pages/login';

import Form from '../pages/form.jsx';

import GetReq from '../pages/getrout.jsx';
import CollapsibleExample from '../pages/navebar.jsx';

import Update from '../pages/update.jsx'


import {BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {



return(
  

  <div>
<BrowserRouter>

<Routes>

<Route index element={<Form/>}/>
<Route path='getdata' element={<GetReq/>} />

 <Route path='login' element={<Login/>} />
<Route path='*' element= <h1>no page</h1> />

<Route path='update' element={<Update/>} />

<Route path='login' element={<Login/>} />






</Routes>



</BrowserRouter>





  </div>

)




}
export default App;
