
import React, { FC } from "react";
import Header from "../../../components/Header/Header";
import styled from "styled-components";
import {buttonPrimary, layout} from "../../../styles";
import { buttonOutline } from "../../../styles";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    ${layout}
`

const Title = styled.h1`
    font-size: 58px;
    margin-top: 96px;
    color: #252B42;
    font-weight: bold;
`
const WrapperButton = styled.div`
    display: flex;
    margin-top: 35px;
`

const ButtonLogin = styled.button`
    ${buttonPrimary}
`

const ButtonOutline = styled(Link)`
    ${buttonOutline};
    margin-left: 10px;
`

const PageHome: FC = () =>{
    return(
        <>
            <Header/>
            <Wrapper>
                <Title>Место для получения медицинской помощи</Title>
                <WrapperButton>
                    <ButtonLogin>Войти</ButtonLogin>
                    <ButtonOutline to={'/contacts'}>Контакты</ButtonOutline>
                </WrapperButton>
                
            </Wrapper>
        </>
    )
}

export default PageHome