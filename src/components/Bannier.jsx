import React from 'react';
import imgBannier from '../assets/img/banner.webp';
import styled from 'styled-components';

const BannierStyle = styled.div`
    width:100%;
    height: 400px;
    // background-image: url(${imgBannier});
    background-image: url('https://img.filmsactu.net/datas/films/p/r/project-power/xl/project-power-5f3658c95dde8.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content:center;
    color: white;
    font-family: 'Rancho', cursive;
    font-size: 50px;
    align-items: center;
    @media (max-width: 625px) {
        width:100%;
        height: 500px;
      }
`;

const Bannier = () => {
    return (<BannierStyle>
        </BannierStyle>);
}
 
export default Bannier;