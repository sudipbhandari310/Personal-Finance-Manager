import './App.scss';
import Dashboard from './Components/Dashboard/Dashboard';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import { GlobalProvider } from './Components/globalContext';
import Register from './Components/Register/Register';
import Income from './Components/Income/Income';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/income',
    element: (
      <GlobalProvider>
        <Income />
      </GlobalProvider>
    ),
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
