import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'
import Portfolio from './Components/Portfolio/Portfolio'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Errorpage from './Components/Errorpage/Errorpage'
import Category from './Components/Category/Category'
import Pc from './Components/Pc/Pc'
import Phone from './Components/Phone/Phone'
import Mac from './Components/Mac/Mac'

let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'Portfolio', element: <Portfolio /> },
      {
        path: 'category', element: <Category />, children: [
          { index: true, element: <Pc /> },
          { path: 'mac', element: <Mac /> },
          { path: 'phone', element: <Phone /> },
        ]
      },
      { path: '*', element: <Errorpage /> },
    ]
  }
])

export default function App() {

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}
