
import React, { FC } from "react";
import styled from "styled-components";
import { buttonPrimary } from "../../../styles";
import { buttonOutline } from "../../../styles";
import { layout } from "../../../styles";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";

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

const PageProfile: FC = () =>{
    return(
        <Layout>
            <Wrapper>
                <Title>Привет, Сергей</Title>
                <WrapperButton>
                    <ButtonLogin>Выйти из аккаунта</ButtonLogin>
                    <ButtonOutline to={'/contacts'}>Перейти в контакты</ButtonOutline>
                </WrapperButton>
                
            </Wrapper>
        </Layout>
    )
}

export default PageProfile