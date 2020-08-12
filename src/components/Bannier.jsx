import React from 'react';
import imgBannier from '../assets/img/banner.webp';
import styled from 'styled-components';

const BannierStyle = styled.div`
    width:100%;
    height: 400px;
    background-image: url(${imgBannier});
    background-size: 100%;
    background-repeat: no-repeat;
`;

const Bannier = () => {
    return (<BannierStyle/>);
}
 
export default Bannier;