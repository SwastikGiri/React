import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home,Header,Footer,TechEvents,FunEvents,Workshops, Signin, Signup} from './components'
import {Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from'react-router-dom'
import Layout from './Layout.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/*'element={<Layout/>}>
      <Route path='tech' element={<TechEvents/>} />
      <Route path='fun' element={<FunEvents/>} />
      <Route path='work' element={<Workshops/>} />
      </Route>
      <Route path='signin' element={<Signin/>}/>
      <Route path='signup' element={<Signup/>}/>
      </Route>

    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
