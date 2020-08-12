import React from 'react';
import styled from 'styled-components';
import {RiMovie2Line} from 'react-icons/ri';
import { BrowserRouter as Router, Link } from "react-router-dom";

const HeaderStyle = styled.header`
    background-color: #1A212F;
    height: 80px;
    width: 100%;
    font-family: 'Rancho', cursive;
    color: white;
    font-weight: 100;
    display: flex;
    align-items: center;
    font-size: 25px;
    
`; 

const DivStyle = styled.div`
    display: flex;

    padding: 10px;
    width: 50%;
    margin-left: 10px;
`;

const LinkStyle = styled(Link)`
    color: white;
    &:hover {
        color: white;
      }

`;


const Header = () => { 
    return (<HeaderStyle>
            
                <DivStyle>
                <RiMovie2Line/>
                <LinkStyle to="/">
                    <div>The Movies</div> 
                </LinkStyle>
                </DivStyle>
            </HeaderStyle>);
}
 
export default Header;