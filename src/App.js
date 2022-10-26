import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Faq from './components/Blog/Faq';
import Carts from './components/Courses/Carts';
import Courses from './components/Courses/Courses';
import SideNav from './components/Courses/SideNav';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Root from './layout/Root';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "courses",
          element: <Courses></Courses>,
          
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "faq",
          element: <Faq></Faq>,
        },
        {
          path: "signup",
          element: <Signup></Signup>,
        },
        {
          path: '/sideNav/:id',
          element: <SideNav></SideNav>
        }
      ],
    },
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
