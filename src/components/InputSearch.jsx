import React, {useState, useEffect} from 'react'
// import { Input } from 'semantic-ui-react'
import styled from 'styled-components';
import { FiSearch } from "react-icons/fi";
import axios from 'axios';



const InputStyle = styled.input`
    background: #2E3752;
    color: white;
    border: #2E3752;
    border-radius: 10px;
    padding: 5px;
    outline:0;
    font-size: 12px;
    height: 43px;
    width: 353px;
    padding-left: 40px;
    @media (max-width: 625px) {
        // position: relative;
        // left:0;
        // bottom: 0;
      }
`;

const IconSearchStyle = styled.div`
    position: absolute;
    top:27px;
    right:330px;
    color: #6C716C
`;




const InputSearch = () => {
    const [text, setText] = useState("");
    const [page, setPage] = useState(1);
    const API_TOKEN = "729aeba52cc937fbc8db281ee92109a7";

    useEffect(() => {
        (async function() {
    
          const res = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`
          );
          // const users = await res.json();
          console.log(res.data.results);
          localStorage.setItem("films", JSON.stringify(res.data.results))
        })();
      }, []);

    const changementText = async (e)=>{
        setText(e.target.value);
        console.log(text);
        // const res = await axios.get(
        //     `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}`
        //   );
        // console.log(res.data.results);
        // localStorage.setItem("films", JSON.stringify(res.data.results))
    }

    return(
        <div>
        <InputStyle  placeholder='Search...' onChange={changementText}  />
        <IconSearchStyle>
            <FiSearch/>
        </IconSearchStyle>
      
    </div>
    )
}

export default InputSearch