import axios from 'axios';
import {API_TOKEN} from '../config/config';


export const searchFilm = (text, pageNumber)=>{
  return  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${pageNumber}`
  );
}

export const getFilmById = (id)=>{
  return  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`);
}

export const popularFilm = (pageNumber)=>{
  return  axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}&language=fr&page=${pageNumber}`
  );
}

export const getAnnonceById = (id)=>{
  return  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_TOKEN}&language=fr`
  );
}


export function getImageFromApi (image) {
      return `https://image.tmdb.org/t/p/w500/${image}`
}

export function getDefaulImage () {
  return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwR31HeEDfrHDKRqOyKahOhSeSml9iTQLQFg&usqp=CAU'
}


  