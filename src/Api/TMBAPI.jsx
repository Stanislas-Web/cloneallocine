import axios from 'axios';
import {API_TOKEN} from '../config/config';
export default axios.create({
 
  baseURL: `https://cartographievbg.herokuapp.com/api/`
});

export const searchFilm = (text, pageNumber)=>{
  return  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${pageNumber}`
  );
}

export function getImageFromApi (name) {
      return 'https://image.tmdb.org/t/p/w300' + name
}

  