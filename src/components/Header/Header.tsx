import React, {FC} from "react";
import styled from "styled-components";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import useAuthModal from "../../store/authModalStore";
import useUserStore from "../../store/authStore";
import { media } from "../../styles";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    padding-left: 70px;
    padding-right: 70px;
    border-bottom: 1px solid black;
    
    ${media.mobile}{
        padding-left: 10px;
        padding-right: 10px;
    }
`

const Logo = styled.img`
`
const Content = styled.div`
    display: flex;
    align-items: center;
    

`
const StyledLink = styled(Link)`
    font-size: 15px;
    color: #737373;
`

const Button = styled.button`
    font-size: 20px;
    color: #FF685B;
    border: 2px solid #FF685B;
    background-color: #FFFFFF;
    height: 40px;
    border-radius: 7px;
    margin-left: 50px;
    padding-left: 60px;
    padding-right: 60px;

    ${media.mobile}{
        margin-left: 10px;
    padding-left: 20px;
    padding-right: 20px;
    }


`


const Header: FC = () =>{
    const user = useUserStore(state=>state.user);
    const logout = useUserStore(state=>state.logout)
    const openModal = useAuthModal((state)=> state.openModal)
    return(
        <Wrapper>
            <div>
                <Link to={user ? '/profile' : '/'} >
                    <Logo src={logo}/>
                </Link>
            </div>
            <Content>
                <StyledLink to={'/contacts'}>Контакты</StyledLink>
                
                {!user? <Button onClick={openModal}>Войти</Button>: <Button onClick={logout}>Выйти</Button>}

            </Content>
        </Wrapper>

    )
}

export default Header