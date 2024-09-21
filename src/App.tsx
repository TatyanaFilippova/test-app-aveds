import { FC, PropsWithChildren, useEffect, useState } from 'react';
import PageHome from './pages/public/PageHome/PageHome';
import { createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom';
import PageContacts from './pages/public/PageContacts/PageContacts';
import PageProfile from './pages/protected/PageProfile/PageProfile';
import useUserStore from './store/authStore';
import GlobalStyle from './styles/globalStyle';
import Modal from 'react-modal';
import { UserApi } from './types';

Modal.setAppElement('#root');

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = useUserStore(state=>state.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[navigate, user])
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

const checkLogin = async (login: (user: UserApi) => void) =>{
  const userId = localStorage.getItem('user_id')
    if (userId){
      const result = await fetch('/api/users.json')
      const users: UserApi[] = await result.json()
      const currentUser = users.find((item)=> item.id===userId) 
      if (currentUser){
        login(currentUser)
      }   
    }
}

function App() {
  const [isLoading, setLoading] = useState(true)
  const login = useUserStore((state)=>state.login)
  useEffect(()=>{
    checkLogin(login).then(()=>setLoading(false))
  },[])
  if (isLoading){
    return null;
  }
  return (
   <>
    <GlobalStyle/>
    <RouterProvider router={router} />
   </> 
  );
}

export default App;
