import {useEffect, useState} from 'react';
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';



const APIKEY="c387ba173b2b41b5903ce2aef8dd68fc";
function Popular() {

    const [popular, setPopular] = useState([]);
    useEffect(() => {
       getPopular();
    }, [])
    const getPopular = async() => {

const check = localStorage.getItem('popular');

if(check){
    setPopular(JSON.parse(check));
} else{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=9`);
    
    const data= await api.json();
    localStorage.setItem('popular', JSON.stringify(data.recipes));
    setPopular(data.recipes);
    console.log(data.recipes);
}

       
       
    }
  return (
    <div> 
              <Wrapper>
                    <h3>Popular Recipes</h3>

                    <Splide options={{
                        perPage:5,
                        rewind: true,
                        arrows:true,
                        pagination:false,
                        drag:'free',
                        gap:"1rem",
                        
                    }}>
                    {popular.map((recipe)=>{
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                                <p>
                                    {recipe.title}
                                </p>
                                <img src={recipe.image} alt={recipe.title}/>
                                <Gradient/>
                            </Card>
                            </SplideSlide>

                        );
                    })}
                    </Splide>
                </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
margin:5%;`


const Card = styled.div`
min-height;20rem;
border-radiums:2rem;
overflow:hidden;
position:relative;

img{
border-radius:10%;
// position:absolute;
left:0;
width:100%;
height:100%;
object-fit:cover;

}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0;
    transform:translate(-50%, 0%);
    color:white;
    width:100;
    text-align:center;
    fnt-weight:600;
    font-size:1rem;
    heigh:40%;
    display:flex;
    justify-content:center;
    align-items:center;


};


`

const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5);)
`


export default Popular
 