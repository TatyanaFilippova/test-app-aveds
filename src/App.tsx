import React from 'react';
import PageHome from './pages/public/PageHome/PageHome';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import PageContacts from './pages/public/PageContacts/PageContacts';
import PageProfile from './pages/protected/PageProfile/PageProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/contacts",
    element: <PageContacts />,
  },
  {path: "/profile",
  element: <PageProfile />,
},
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
