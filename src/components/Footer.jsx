import React from 'react';
import styled from 'styled-components';
import {RiMovie2Line} from 'react-icons/ri';

const FooterStyle = styled.footer`
    background: #2E3752;
    color: white;
    font-family: 'Rancho', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    font-size: 20px;
`;

const Footer = () => {
    return ( <FooterStyle>
            <p><RiMovie2Line/>The Movies </p>
    </FooterStyle> );
}
 
export default Footer;