
import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getImageFromApi, getDefaulImage, getFilmById } from '../Api/TMBAPI';
import YouTube from 'react-youtube';
import { GoDeviceCameraVideo } from "react-icons/go";
import {API_TOKEN} from '../config/config';
import Spinner from './SpinnerLoader';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    Link
  } from "react-router-dom";

const DivContainer = styled.div`
    display: flex;
    padding: 0 10px;
    @media (max-width: 625px) {
        padding: 2px;
        flex-direction: column;
      }
`;
const ContainerStyle = styled.main`
    background-color: #1A212F;
    margin-top: -50px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding:20px;
    @media (max-width: 625px) {
        margin-top: -321px;
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
      width: 620px;
      height: 500px;
      @media (max-width: 625px) {
        width: 100%;
        height: 300px; 
    }
`;
const ImgFilm = styled.img`
    border-radius: 10px;
    height: 350px;
    @media (max-width: 625px) {
        width: 100%;
        height: 200px;
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
const DivDetail = styled.div`
    padding: 10px;
`;



const DetailFilm = () => {
    const [film, setFilm] = useState("");
    const [genres, setGenres]= useState([]);
    const [pays, setPays]= useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let {id} = useParams();
    const params = {id};
    console.log(id);

    useEffect(() => {
        (async function() {
          const res = await getFilmById(params.id);
          setFilm(res.data);
          setGenres(res.data.genres);
          setPays(res.data.production_countries);
          setIsLoading(true);
        })();
    }, []);

    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_TOKEN}&language=fr`).then((res) => {
    //       setFilm(res.data);
    //       console.log("lol"+res.data);
    //       setGenres(res.data.genres);
    //       setIsLoading(true);
    //         console.log("temps "+res.data.runtime);
    //       setPays(res.data.production_countries)
    //     }).catch((erreur)=> {
    //       console.log(erreur);
    //   });
    //   }, []);



      
    return ( <>
        <ContainerStyle>
            <H1Style>{film.title}</H1Style>
            <br/><br/>
            {isLoading == false ? <Spinner/> :  
            <DivContainer>
            <CardImageAndButton>
            <ImgFilm src={ film.poster_path === null? getDefaulImage():getImageFromApi(film.backdrop_path)}/>
            <Link to={`/annonce/${film.id}`}>
            <BandeAnnonce> <GoDeviceCameraVideo/> &nbsp; Bande Annonce</BandeAnnonce>
            </Link>
            </CardImageAndButton>
            <DivDetail>

               <div>
                    <GenreStyle><SpanDetail>Genre(s): </SpanDetail>{genres.map(genre=> genre.name).join("/ ")}</GenreStyle> <br/>
                    <GenreStyle><SpanDetail>Description: </SpanDetail>{film.overview}</GenreStyle><br/>
                    <GenreStyle><SpanDetail>Date Sortie: </SpanDetail>{film.release_date}</GenreStyle><br/>
                    <GenreStyle><SpanDetail>Pays de production: </SpanDetail>{pays.map(pays=> pays.name).join("/ ")}</GenreStyle><br/>
                    {/* <GenreStyle><SpanDetail>Durée: </SpanDetail>{film.runtime} min</GenreStyle><br/> */}
                    
                   
               </div>
            </DivDetail>

            

            </DivContainer>
            } 
        </ContainerStyle> 
    </> );
}
 
export default DetailFilm;



// import React,{Component} from 'react';

// import axios from 'axios';
// import {API_TOKEN} from '../config/config';
// import styled from 'styled-components';
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     useParams,
//     Link
//   } from "react-router-dom";
// import { getImageFromApi, getDefaulImage, getFilmById } from '../Api/TMBAPI';
// import { GoDeviceCameraVideo } from "react-icons/go";


// const DivContainer = styled.div`
//     display: flex;
//     padding: 0 10px;
//     @media (max-width: 625px) {
//         padding: 5px;
//         flex-direction: column;
//       }
// `;
// const ContainerStyle = styled.main`
//     background-color: #1A212F;
//     margin-top: -50px;
//     border-top-left-radius: 30px;
//     border-top-right-radius: 30px;
//     padding:20px;
//     @media (max-width: 625px) {
//         margin-top: -321px;
//     }
// `;

// const CardImageAndButton = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center; 
//     justify-content: center;
//     // @media (max-width: 625px) {
//     //     width: 100%;
//     //     height: 300px; 
//     // }
// `;

// const H1Style = styled.h1`
//     font-family: 'Rancho', cursive;
//     color: white;
//     text-align: center;
//     font-weight: 100;
//     padding: 10px;
// `;


// const ImgFilm = styled.img`
//     border-radius: 10px;
//     height: 350px;
//     @media (max-width: 625px) {
//         width: 100%;
//         height: 200px;
//     }
// `;
// const CardDetail = styled.div`
//       display: flex;
//       font-family: 'Rancho', cursive;
//       @media (max-width: 625px) {
//         display: flex;
//         flex-direction : column;
//       }
// `;

// const PDetail = styled.p`
//       color : white;
//       font-size: 20px;
//       padding: 0 20px;
//       font-weight: 20;
//       width: 100%;
// `;

// const SpanDetail = styled.span`
//     font-weight: 50;
//     // font-size: 35px;
//     color: #E9DF9A
// `;

// const BandeAnnonce = styled.div`
//     background: #2E3752;
//      color: white;
//      width: 200px;
//      height: 50px;
//      border-radius: 30px;
//      text-align: center;
//      font-weight: 100;     display: flex;
//      justify-content: center;
//      align-items: center;
//      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//      transition: 0.5s;
//      margin-top: -20px;
//      &:hover{
//          border: 2px solid #2E3752;
//          background: #1A212F;
//          cursor: pointer;

//      } `;
//  const GenreStyle = styled.div`
//      background: #2E3A44;
    
//      padding:10px;
//      color: white;
//      border-radius: 5px;


//  `;
//  const DivDetail = styled.div`
//      padding: 10px;
     
//  `;




// export default class DetailFilm extends Component {
//   state = {
//     film: [], 
//     genres: [],
//     pays: []
//   }

    



//   componentDidMount() {
//     const params = window.location.pathname;

//     const parameter = params.split('detail/')
//     axios.get(`https://api.themoviedb.org/3/movie/${parameter[1]}?api_key=${API_TOKEN}&language=fr`)
//       .then(res => {
//         this.setState({ film:res.data });
//         console.log("movies"+res.data);
//       })
//   }

//   render() {
//     return (
//         <>      
//                  <ContainerStyle>
//                  <H1Style>{this.state.film.title}</H1Style>
//                      <br/><br/>
//                      <DivContainer>
//                      <CardImageAndButton>
//                      <ImgFilm src={ this.state.film.poster_path === null? getDefaulImage():getImageFromApi(this.state.film.backdrop_path)}/>
//                      <Link to={`/annonce/${this.state.film.id}`}>
//                     <BandeAnnonce> <GoDeviceCameraVideo/> &nbsp; Bande Annonce</BandeAnnonce>
//                     </Link>
//                      </CardImageAndButton>
//                      <DivDetail>
        
//                         <div>
//                              {/* <GenreStyle><SpanDetail>Genre(s): </SpanDetail>{ Array.isArray(this.state.film.genres)  && this.state.film.genres.map(genre=> genre.name).join("/ ") }</GenreStyle> <br/> */}
//                         <GenreStyle><SpanDetail>Description: </SpanDetail>{this.state.film.overview}</GenreStyle><br/>
//                         <GenreStyle><SpanDetail>Durée: </SpanDetail>{this.state.film.runtime} min</GenreStyle><br/>
//                         <GenreStyle><SpanDetail>Date Sortie: </SpanDetail>{this.state.film.release_date}</GenreStyle><br/>
//                         <GenreStyle><SpanDetail>Vote(s): </SpanDetail>{this.state.film.vote_count}</GenreStyle><br/>
//                         <GenreStyle><SpanDetail>Popularité : </SpanDetail>{this.state.film.popularity}</GenreStyle><br/>
//                              {/* <GenreStyle><SpanDetail>Pays de production: </SpanDetail>{this.state.pays.map(pays=> pays.name).join("/ ")}</GenreStyle><br/> */}
                            
                     
                           
//                         </div>
//                         </DivDetail>

//                         </DivContainer>
                    
//                  </ContainerStyle> 
        
                    
//             </>
//     )
//   }
// }




