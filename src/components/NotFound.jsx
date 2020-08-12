import React from 'react';
// import './scss/Content.scss';
import styled from 'styled-components';
import imgNotFound from '../assets/img/notFound.png';

const NotFoundStyle = styled.div`
    margin-top: -400px;
`;

const ImgStyle = styled.img`
    width: 100%;

`;

const NotFound = () => {
    return ( 
        <NotFoundStyle>
            {/* <h1>Not Found</h1> */}
            <ImgStyle src={imgNotFound} alt=""/>
        </NotFoundStyle>
     );
}

export default NotFound;