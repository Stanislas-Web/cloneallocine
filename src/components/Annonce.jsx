import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getImageFromApi, getDefaulImage, getFilmById, getAnnonceById } from '../Api/TMBAPI';
import YouTube from 'react-youtube';
import { GoDeviceCameraVideo } from "react-icons/go";
import Spinner from './SpinnerLoader';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams
  } from "react-router-dom";

const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    @media (max-width: 625px) {
        padding: 5px;
      }
`;
const ContainerStyle = styled.main`
    background-color: #1A212F;
    margin-top: -400px;
    padding:20px;
    border-top: 2px solid #2E3752;
    @media (max-width: 625px) {
        margin-top: -500px;
    }
`;

const CardImageAndButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    // @media (max-width: 625px) {
    //     width: 100%;
    //     height: 300px; 
    // }
`;

const H1Style = styled.h1`
    font-family: 'Rancho', cursive;
    color: white;
    text-align: center;
    font-weight: 100;
    padding: 10px;
`;


const CardVideo = styled(YouTube)`
      width: 300px;
      height: 200px;
      @media (max-width: 625px) {
        width: 100%;
        height: 300px; 
    }
`;
const VideoFilm = styled(YouTube)`
    border-radius: 10px;
    height: 500px;
    width: 800px;
    @media (max-width: 625px) {
        width: 100%;
        height: 300px; 
    }
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
    // font-size: 35px;
    color: #E9DF9A
`;

const BandeAnnonce = styled.div`
    background: #2E3752;
    color: white;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    text-align: center;
    font-weight: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    margin-top: -20px;
    &:hover{
        border: 2px solid #2E3752;
        background: #1A212F;
        cursor: pointer;

    }
`;

const GenreStyle = styled.div`
    background: #2E3A44;
    
    padding:10px;
    color: white;
    border-radius: 5px;


`;
const ImgFilm = styled.img`
    border-radius: 10px;
    height: 350px;
    @media (max-width: 625px) {
        width: 100%;
        height: 250px;
    }
`;
const DivDetail = styled.div`
    padding: 10px;
`;



const Annonce = () => {
    const [annonce, setAnnonce] = useState([]);
    const [keyVideo, setKeyVideo] = useState("");
    const [film, setFilm] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    let {id} = useParams();
    const params = {id};
    console.log(id);

    useEffect(() => {
        (async function() {
          const res = await getAnnonceById(params.id);
          setAnnonce(res.data.results);
          console.log("popop"+JSON.stringify(res.data.results));
            setIsLoading(true);
          const response = await getFilmById(params.id);
          setFilm(response.data)
        })();
    }, []);

    const lancerVideo = (key)=>{
        console.log("nga yeyo");
        setKeyVideo(key)

    }
          const getAnnonce = ()=>{
          if(typeof  annonce == []){
            //   return  <ImgFilm src={ film.poster_path === null? getDefaulImage():getImageFromApi(film.poster_path)}/>
            return <div>Pas de video</div>
          }else{
              return <div>{annonce.map(video=><div> <VideoFilm videoId={video.key}/><br/></div>)}</div>
          }
      }
      
    return ( <>
        <ContainerStyle>
            <H1Style>Voir le(s) Annonce(s) du film  {film.title}</H1Style>
            <br/><br/>
            <DivContainer>
            <CardImageAndButton>
            
            {isLoading == false ? <Spinner/> :getAnnonce}   
            {/* <div>polo</div> */}
            </CardImageAndButton>


            

            </DivContainer>
        </ContainerStyle> 
    </> );
}
 
export default Annonce;