
import React, { FC } from "react";
import Header from "../../../components/Header/Header";
import styled from "styled-components";
import { layout } from "../../../styles";

const Wrapper = styled.div`
    ${layout}
`
const Title = styled.div`
    font-size: 58px;
    font-weight: bold;
    margin-top: 184px;
`

const PageContacts: FC = () =>{
    return(
        <div>
            <Header/>
            <Wrapper>
                <Title>Контакты</Title>
            </Wrapper>
        </div>
    )
}

export default PageContacts