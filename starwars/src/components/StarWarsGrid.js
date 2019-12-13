import React, {useState, useEffect} from 'react';
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from 'styled-components';
import { Spinner} from 'reactstrap';
import Paginations from './Pagination/Pagination'


const StarWarsGrid = () => {
    //set useState
    const [charData, setCharData] = useState([]);
    const [page, setNextPage] = useState("https://swapi.co/api/people");
    //set useEffect
    useEffect(() =>{
        axios.get(page)
        .then(response =>{
            // console.log(response.data); 
            setCharData(response.data);
        })
        .catch(error =>{
            console.log("This is not the data your are looking for...", error);
        }) //error catch
    },[page]) //end use effect

    //pass character data into CharacterCard Component
    //  console.log(charData.results);
    const Container = styled.div`
       display:flex;
       justify-content:center;
       flex-wrap:wrap;
    `
    const Wrapper = styled.div`
        width:80%;
        margin: 0 auto;
    `
    const CharCard = styled(CharacterCard)`
        width: 25%;
    `
    const Loader = styled.div`
        display:flex;
        justify-content:center;
        align-item:center;
        padding:10%;
    `
    if (!charData.results){
        return (
        <Loader>
             <Spinner color="dark" />
            <h3>Loading...</h3>
        </Loader>
       
        )
      }else{
        return (
        <Wrapper>
            <Container>
                {charData.results.map((item,index) =>{
                    return <CharCard key ={item.url} data={item}/>
                })}   
            </Container>
            <Paginations page={page} setNextPage={setNextPage} charData={charData}/>
        </Wrapper>
          
      
        );
      }
  
  
}

export default StarWarsGrid;
