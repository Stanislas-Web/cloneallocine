import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import CardFilm from './CardFilm';
import Spinner from './SpinnerLoader';
import { searchFilm, popularFilm } from "../Api/TMBAPI";
import { Pagination } from "semantic-ui-react";
// import { Spinner } from 'react-bootstrap';
const DivContainer = styled.div`;
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
    margin-top: -50px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    text-align: center;
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


const ButtonPagination = styled.button`
    background: #2E3752;
    color: white;
    font-family: 'Rancho', cursive;
    margin: 10px;
    border: 2px solid #2E3752;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    outline: 0;
    font-size: 15px;
    &:hover{
        cursor: pointer;
    }
    
`;

const PaginationStyle = styled(Pagination)`
background: #2E3752;
color: white;
width: 80%;
font-family: 'Rancho', cursive;

`;




const Container = () => {
    const [text, setText] = useState("Marvel");
    const [totalpage, setTotalPage] = useState(0);
    let [pageNumber, setPageNumber] = useState(1);
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [visiblePagination, setVisiblePagination] = useState(false);

    useEffect(() => {
        (async function() {
          const res = await searchFilm(text,pageNumber);
          setFilms(res.data);
          setTotalPage(res.data.total_pages)
          setIsLoading(true)
        })();
      }, []);

    const changementText = async (e)=>{
        setText(e.target.value);
        console.log(text);
        const res = await searchFilm(text,pageNumber);
          setFilms(res.data);
          setTotalPage(res.data.total_pages)
          setIsLoading(true)
          setVisiblePagination(true)
    }

    const nextPage = async ()=>{
        if(films && totalpage > pageNumber){
            setPageNumber(pageNumber+1);
            console.log(pageNumber);
            const res = await searchFilm(text,pageNumber);
            setFilms(res.data)
            
        }

    }

    const previousPage = async ()=>{
        if(films && pageNumber > 0){
            setPageNumber(pageNumber-1);
            console.log(pageNumber);
            const res = await searchFilm(text,pageNumber);
            setFilms(res.data)
            
        }

    }

    const changePage = async (e, pageInfo) => {
        const res = await searchFilm(text,pageNumber);
        setPageNumber(pageNumber+1)
        setFilms(res.data)
    };

    return ( <ContainerStyle>
                    <H1Style>The Best Movies</H1Style>
                    <InputStyle  placeholder="Rechercher..." onChange={changementText}  />
                    <br/><br/>
                              
                    <DivContainer>
                        {isLoading == false ? <Spinner/> : films.results && films.results.map(film=> <CardFilm key={film.id} film={film}/>)}    
                    </DivContainer>
                    <br/>
                    {
                        (visiblePagination == true)?
                        <div>
                            <Pagination 
                            activePage={pageNumber}
                            onPageChange={changePage}
                            totalPages={totalpage}
                            ellipsisItem={null}

                            // defaultActivePage={pageNumber}
                            // firstItem={changePage}
                            // lastItem={null}
                            // pointing
                            // secondary
                            // totalPages={totalpage}
                            />
                   </div>
                        :null
                    }

                    <br/><br/>
                  
            </ContainerStyle> );
}
 
export default Container;