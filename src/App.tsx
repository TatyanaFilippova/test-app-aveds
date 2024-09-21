import React, { FC, PropsWithChildren, useEffect } from 'react';
import PageHome from './pages/public/PageHome/PageHome';
import { createBrowserRouter, RouterProvider, Route, useNavigate} from 'react-router-dom';
import PageContacts from './pages/public/PageContacts/PageContacts';
import PageProfile from './pages/protected/PageProfile/PageProfile';
import useUserStore from './store/authStore';
import GlobalStyle from './styles/globalStyle';


const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = useUserStore(state=>state.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[user])
  return <>{children}</>
   
  
}

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
  element: <PrivateRoute><PageProfile /></PrivateRoute>,
},
]);

function App() {
  return (
   <><GlobalStyle/><RouterProvider router={router} /></> 
  );
}

export default App;
