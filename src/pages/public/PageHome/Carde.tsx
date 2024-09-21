import { FC } from "react";
import styled  from "styled-components";
import { media } from "../../../styles";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 248px;
    box-shadow: 0px 13px 19px 0px #00000012;
    padding: 35px 40px;
    width: 33.33%;

    ${media.mobile}{
        width: 100%;
    }

`

interface CardProps{
    title: string;
    icon: string;
    content: string;

}

const IconCard = styled.img`
    height: 72px;
    width: 72px;
    margin-bottom: 20px;

`

const Title = styled.div`
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`
const Content = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #737373;
`
const Line = styled.div`
    width: 50px;
    border-bottom: 2px solid #E74040;
    margin-bottom: 20px;
`

const Card: FC<CardProps> = ({icon, title, content }) =>{
    return( 
        <Wrapper>
            <IconCard src={icon}/>
            <Title>{title}</Title>
            <Line/>
            <Content>{content}</Content>
            

        </Wrapper>
    )
}

export default Card
