import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './comonents/Home/Home.jsx'
import { About } from './comonents/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './comonents/Contact/Contact.jsx'
import { User } from './comonents/User/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout />}>
      <Route path ='' element={<Home/>}/>
      <Route path ='about' element={<About/>}/>
      <Route path ='contact' element={<Contact/>}/>
      <Route path ='user/:userid' element={<User/>}/>

    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/>
  </StrictMode>,
)
