import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Root from './layout/Root';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path:'courses',
          element: <Courses></Courses>
        },
        {
          path:'blog',
          element: <Blog></Blog>
        },
        {
          path:'signup',
          element: <Signup></Signup>
        }
      ]
    }

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
