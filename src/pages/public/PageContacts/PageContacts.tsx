
import React, { FC } from "react";
import styled from "styled-components";
import { layout, media } from "../../../styles";
import Layout from "../../../components/Layout/Layout";

const Wrapper = styled.div`
    ${layout}
`
const Title = styled.div`
    font-size: 58px;
    line-height: 80px;
    font-weight: bold;
    margin-top: 184px;

    ${media.mobile}{
        font-size: 28px;
        margin-top: 100px;
    }
`

const PageContacts: FC = () =>{
    return(
        <Layout>
            <Wrapper>
                <Title>Контакты</Title>
            </Wrapper>
        </Layout>
    )
}

export default PageContacts