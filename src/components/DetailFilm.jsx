import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getImageFromApi } from '../Api/TMBAPI';
import YouTube from 'react-youtube';

const DivContainer = styled.div`
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    padding: 0 10px;
    @media (max-width: 625px) {
        padding: 5px;
        justify-content:flex-start;
      }
`;
const ContainerStyle = styled.main`
    background-color: #1A212F;
    margin-top: -150px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding:20px;
    @media (max-width: 625px) {
        margin-top: -321px;
    }
`;

const H1Style = styled.h1`
    font-family: 'Rancho', cursive;
    color: white;
    text-align: center;
    font-weight: 100;
    padding: 10px;
`;


const CardVideo = styled(YouTube)`
      width: 620px;
      height: 500px;
      @media (max-width: 625px) {
        width: 100%;
        height: 300px; 
    }
`;
const ImgFilm = styled.img`
    //   width: 620px;
    //   height: 500px;
`;
const CardDetail = styled.div`
      display: flex;
      font-family: 'Rancho', cursive;
      @media (max-width: 625px) {
        display: flex;
        flex-direction : column;
      }
`;

const PDetail = styled.p`
      color : white;
      font-size: 20px;
      padding: 0 20px;
      font-weight: 20;
      width: 100%;
`;

const SpanDetail = styled.span`
    font-weight: 50;
    font-size: 35px;
`;



const DetailFilm = () => {
    const [film, setFilm] = useState([]);
    const [video, setVideo] = useState([]);
    
    const API_TOKEN = "729aeba52cc937fbc8db281ee92109a7";
    let id = 0;
     id = localStorage.getItem("id");
    console.log(id);

    // useEffect(() => {
    //     (async function() {
    
    //       const res = await axios.get(
    //         `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`
    //       );
    //       setFilm(res.data);
    //       console.log(res.data);
    //       const resVideo = await axios.get(
    //         `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_TOKEN}&language=fr`
    //       );
    //       setVideo(resVideo.data.results[1]);
    //       console.log(resVideo.data.results);

    //     })();
    //   }, []);

    useEffect(() => {
        console.log('USE EFFECT');
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`).then((res) => {
            setFilm(res.data);
        }).catch((erreur)=> {
          console.log(erreur);
      });

      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_TOKEN}&language=fr`).then((resVideo) => {
        setVideo(resVideo.data.results[1]);
        }).catch((erreur)=> {
        console.log(erreur);
    });

    }, []);

      const getVideo = ()=>{
          if(typeof video === 'undefined'){
              return  <ImgFilm src={ film.poster_path === null? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwR31HeEDfrHDKRqOyKahOhSeSml9iTQLQFg&usqp=CAU":"https://image.tmdb.org/t/p/w500/"+film.backdrop_path}/>
          }else{
              return <CardVideo videoId={video.key} autoplay/>
          }
      }
    return ( <>
        <ContainerStyle>
            <H1Style>{film.title}</H1Style>
            <br/>
            <CardDetail>
                {getVideo()}
                <br/><br/>
                <div>
                    <>
    <PDetail><SpanDetail>Description </SpanDetail>: {film.overview}</PDetail>
    <PDetail><SpanDetail>Date de sortie</SpanDetail> : {film.release_date}</PDetail>
    <PDetail><SpanDetail>Votes</SpanDetail> : {film.vote_count}</PDetail>
    <PDetail><SpanDetail>Genres</SpanDetail> : {film.genres && film.genres.map(genre=> genre.name).join("/ ")}</PDetail>
    <PDetail><SpanDetail>Popularité</SpanDetail> : {film.popularity} %</PDetail>
    <PDetail><SpanDetail>Companie(s)</SpanDetail> : {film.production_companies && film.production_companies.map(companie=> companie.name).join("/ ")}</PDetail>
    <PDetail><SpanDetail>Pays de production</SpanDetail> : { film.production_countries && film.production_countries.map(countrie=> countrie.name).join("/ ")}</PDetail>
    {/* adult: false
backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg"
belongs_to_collection: {id: 623911, name: "Captain Marvel - Saga", poster_path: "/4diELSzXT1FbN782cOogEWeKN2w.jpg", backdrop_path: "/ubZUKycnQldt2umj0bPD2VwXDJM.jpg"}
budget: 152000000
genres: (3) [{…}, {…}, {…}]
homepage: "https://www.marvel.com/movies/captain-marvel"
id: 299537
imdb_id: "tt4154664"
original_language: "en"
original_title: "Captain Marvel"
overview: "Captain Marvel raconte l’histoire de Carol Danvers qui va devenir l’une des super-héroïnes les plus puissantes de l’univers lorsque la Terre se révèle l’enjeu d’une guerre galactique entre deux races extraterrestres."
popularity: 48.13
poster_path: "/3v6dxV5l6Zs2OcrAnIcuE9POeGY.jpg"
production_companies: [{…}]
production_countries: [{…}]
release_date: "2019-03-06"
revenue: 1128274794
runtime: 123
spoken_languages: [{…}]
status: "Released"
tagline: "Notre monde aura besoin d'elle"
title: "Captain Marvel"
video: false
vote_average: 7
vote_count: 9849 */}
</>
                </div>

            </CardDetail>
            <br/>
               
            </ContainerStyle> 
    </> );
}
 
export default DetailFilm;