import{ FaPizzaSlice, FaHamburger} from "react-icons/fa";
import{GiNoodles, GiChopsticks} from "react-icons/gi";

import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Category() {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
      <FaPizzaSlice/>
      <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
      <FaHamburger/>
      <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
      <GiNoodles/>
      <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
      <GiChopsticks/>
      <h4>Japanese</h4>
      </Slink>
     
    </List>
  )
}
 
const List = styled.div`
justify-content:center;
margin: 2rem 0rem;

`

const Slink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:2px;
margin-right:2rem;
border:1px solid gray;
width:9rem;
height:3.3rem;
cursor:pointer;

h4{
  color:white;
}
svg{
  color:white;
}
&.active{
  background:linear-gradient(to right, #f27121, #e94057)
}
&:hover{
  color:orange;
  transform:scale(0.9);
}
`

export default Category
