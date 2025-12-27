import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import { Applayout } from '../layout/applayout'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'

function App() {
 const router = createBrowserRouter([
  {path:"/",
    element:<Applayout />
  },
  {
    path:"eccendentesia.github.io/StaticWebsite/",
    element:<Applayout/>
  }
 ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
