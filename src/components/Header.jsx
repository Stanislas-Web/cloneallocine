import React from 'react';
import styled from 'styled-components';
import {RiMovie2Line} from 'react-icons/ri';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


const HeaderStyle = styled(Navbar)`
    background-color: #1A212F;
    // height: 80px;
    // width: 100%;
    font-family: 'Rancho', cursive;
    // color: white;
    // font-weight: 100;
    // display: flex;
    // align-items: center;
    // font-size: 25px;
    
`; 

const DivStyle = styled.div`
    display: flex;

    padding: 10px;
    width: 50%;
    margin-left: 10px;
`;

const LinkStyle = styled(Link)`
    color: white;
    font-weight:300;
    margin-left: 20px;
    &:hover {
        color: white;
      }
`;

const NavResponsive = styled(Navbar.Toggle)`

  outline: 0;

`;

 const NavMenu = styled(Navbar.Collapse)`
      padding-rigth: 1000px; 
 `;




const Header = () => { 

    return (
    // <HeaderStyle>
            
    //             <DivStyle>
    //             <RiMovie2Line/>
    //             <LinkStyle to="/">
    //                 <div>The Movies</div> 
    //             </LinkStyle>
    //             </DivStyle>
    //         </HeaderStyle>);
    <HeaderStyle expand="sm">
    <Navbar.Brand href="/">
              <DivStyle>
                <LinkStyle to="/">
                    <div><RiMovie2Line/>The Movies</div> 
               </LinkStyle>
                </DivStyle>
    </Navbar.Brand>
    <NavResponsive aria-controls="basic-navbar-nav" />
    <NavMenu id="basic-navbar-nav"  className="justify-content-end">
      <Nav className="mr-sm-2 " defaultActiveKey="/">
        <LinkStyle to="/" >Accueil</LinkStyle>
        <LinkStyle to="/topfilm/" >Top Film</LinkStyle>
      </Nav>
    </NavMenu>
  </HeaderStyle>
    )
}
 
export default Header;