import React from 'react';
import styled from 'styled-components';
import { getImageFromApi } from '../Api/TMBAPI';
import { BrowserRouter as Router, Link } from "react-router-dom";



const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background: #2E3752;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    &:hover{
        border: 0.5px solid #2E3752;
        background: #1A212F;
        width: 198px;
        cursor: pointer;

    }
    @media (max-width: 625px) {
        flex-direction: row;
        width: 100%;
        margin-top: 10px;
        padding: 10px;
        background: #1A212F;
        box-shadow: none;
        border-bottom: 2px solid rgba(0, 0, 0, 0.39);

      }

`;

const CardChild = styled.div`
    width: 100%;
    color: white;
    height: 100px;
    font-size: 10px;
    padding: 20px;
    @media (max-width: 625px) {
        padding: 10px 10px 10px 30px;   
    }
`;
const ImgStyle = styled.img`
    width: 100%;
    height: 300px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    @media (max-width: 625px) {
        width: 104px;
        height: 128px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        
    }
`;

const PStyle= styled.p`
    font-size: 20px;
    font-weight: 50;
    text-align: center;
    font-family: 'Rancho', cursive;
    @media (max-width: 625px) {
        text-align: left;
        font-weight: 1000; 
        padding: 30px 0;  
    }
    
`;



const CardFilm = (props) => {

    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwR31HeEDfrHDKRqOyKahOhSeSml9iTQLQFg&usqp=CAU";

    const film = props.film
    return <Link to={`/detail/${film.id}`}>
            <Card>
                 
                <ImgStyle src={ film.poster_path === null? defaultImg :getImageFromApi(film.poster_path)} />   
                <CardChild>
                    <PStyle>{film.title.length > 40 ? film.title.substring(0,40) : film.title}</PStyle> 
                </CardChild>
            
            </Card>
            </Link>
}
 
export default CardFilm;