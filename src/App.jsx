import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'


function App() {

  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="main-container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
