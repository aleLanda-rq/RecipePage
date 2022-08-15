import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import Nav from "../pages/Nav";





const APIKEY="c387ba173b2b41b5903ce2aef8dd68fc";

function  Cuisine() {

const [cuisine, setCuisine] = useState([]);
let params= useParams();

  const getCuisine = async (name) =>{
const data =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&number=9&cuisine=${name}`)
  const recipes = await data.json();
  setCuisine(recipes.results);


};
useEffect(() => {
 getCuisine(params.type);
console.log(params.type);
}, [params.type]);

return <Grid>
  {cuisine.map((item)=> {
    return(
      <Card key={item.id}>
        <img src={item.image} alt=''/>
        <h4>
          {item.title}
        </h4>

      </Card>
    )

  })}
</Grid>
}

const Grid= styled.div`
display:grid;
grid-template-column:repeat(auto-fit, minmax(20rem, 1fr));
grid-gap:1rem;
display:flex;
`

const Card = styled.div`
img{
width:100%;
width:20rem;
object-fit:cover;

border-radius:1rem;

}
a{
  text-decoration:none;
}
h4{
  text-align:center;
  padding:1rem;
}
`


export default  Cuisine;
