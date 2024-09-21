import { css } from "styled-components";

export const media = {
    mobile: "@media (max-width: 599px)"
}

export const layout = css`
    max-width: 1026px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;
`

export const buttonPrimary = css`
    height: 52px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #FF685B;
    border-radius: 5px;
    font-size: 14px;
    color: #FFFFFF;
    font-weight: bold;
    transition: all 0.2s linear;

    &:hover{
        opacity: 0.7;
    }

    ${media.mobile}{
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const buttonOutline = css`
    height: 52px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-size: 14px;
    color: #FF685B;
    border-color:  #FF685B;
    border: 1px solid  #FF685B;
    font-weight: bold;
    transition: all 0.2s linear;

    &:hover{
        color: #FFFFFF;
        background-color: #FF685B;
    }

    ${media.mobile}{
        padding-left: 20px;
        padding-right: 20px;
    }
`


