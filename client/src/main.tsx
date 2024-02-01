import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {Landing,NotFound,Room} from './Pages'


const approuter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/room',
        element: <Room />
      }
    ],
    errorElement: <NotFound />
  }
]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
<RouterProvider router={approuter} />
)
