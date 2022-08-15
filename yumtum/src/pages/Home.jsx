import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Nav from "../pages/Nav";
import Cover from "../components/Cover";
import React from 'react';


function Home() {
  return (
    <div>
      <Nav/>
      <Cover/>
      <Veggie/>
      <Popular/>
    </div>
  )
}

export default Home
