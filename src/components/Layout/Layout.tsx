import { PropsWithChildren, FC } from "react"
import AuthModal from "../AuthModal/AuthModal"
import Header from "../Header/Header"


const Layout: FC<PropsWithChildren> = ({children}) =>{
    return(
        <>
            <Header/>
            {children}
            <AuthModal/>
        </>
    )
}

export default Layout