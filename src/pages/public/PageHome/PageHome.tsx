
import React, { FC } from "react";
import Header from "../../../components/Header/Header";
import styled from "styled-components";
import {buttonPrimary, layout} from "../../../styles";
import { buttonOutline } from "../../../styles";
import { Link } from "react-router-dom";
import Card from "./Carde";
import iconHeart from '../../../assets/iconHeart.png'
import iconStethoscope from '../../../assets/iconStethoscope.png'
import iconTable from '../../../assets/iconTable.png'


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
    margin-bottom: 96px;
`

const ButtonLogin = styled.button`
    ${buttonPrimary}
`

const ButtonOutline = styled(Link)`
    ${buttonOutline};
    margin-left: 10px;
`
const WrapperCard = styled.div`
    display: flex;
    justify-content: space-between;
    grid-gap: 30px;
    
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
                <WrapperCard>
                    <Card icon={iconHeart} title="Онлайн-прием" content="Рыба текст"/>
                    <Card icon={iconStethoscope} title="Экстренный Случай" content="Рыба текст"/>
                    <Card icon={iconTable} title="Лечение рака" content="Рыба текст"/>
                </WrapperCard>
            </Wrapper>
        </>
    )
}

export default PageHome