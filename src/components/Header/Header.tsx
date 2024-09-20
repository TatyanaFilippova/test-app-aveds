import React, {FC} from "react";
import styled from "styled-components";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    padding-left: 70px;
    padding-right: 70px;
    border-bottom: 1px solid black;
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
    width: 186px;
    height: 40px;
    border-radius: 7px;
    margin-left: 50px;


`

const Header: FC = () =>{
    return(
        <Wrapper>
            <div>
                <Logo src={logo}/>
            </div>
            <Content>
                <StyledLink to={'/contacts'}>Контакты</StyledLink>
                <Button>Войти</Button>

            </Content>
        </Wrapper>

    )
}

export default Header