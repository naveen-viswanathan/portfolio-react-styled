import styled from "styled-components";
import { Link } from "react-scroll";


export const Button = styled(Link)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 20px;
    color: #010606;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    z-index: 10;
    margin-top: 200px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #000000;
        background: #ffffff;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 14px;
    }

`