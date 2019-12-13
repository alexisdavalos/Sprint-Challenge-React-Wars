import React, {useState, useEffect} from 'react';
import CharacterCard from "./CharacterCard";
import axios from "axios";


const StarWarsGrid = () => {
    //set useState
    const [charData, setCharData] = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/"
    const url = "https://swapi.co/api/people";
    //set useEffect
    useEffect(() =>{
        axios .get(proxy+url)
        .then(response =>{
            console.log(response.data); 
            setCharData(response.data);
        })
        .catch(error =>{
            console.log("This is not the data your are looking for...", error);
        }) //error catch
    },[]) //end use effect

    //pass character data into CharacterCard Component
    //  console.log(charData.results);


    if (!charData.results){
        return <h3>Loading...</h3>
      }else{
        return (
            <div>
                {charData.results.map((item,index) =>{
                    return <CharacterCard key ={item.url} data={item}/>
                })}
            </div>
        
          
      
        );
      }
  
  
}

export default StarWarsGrid;
