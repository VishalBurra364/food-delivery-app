import React, { useState } from 'react';
import Header from '../../components/Header/header';
import Exploremenu from '../../components/Exploremenu/exploremenu';
import Fooddisplay from '../../components/Fooddisplay/fooddisplay';
import Footer from '../../components/Footer/footer';

function Home(){
  const [categories,setCategories]=useState("All");
  return (
    
    <div>
      <Header />
      <Exploremenu categories={categories} setCategories={setCategories }/>
      <Fooddisplay categories={categories}/>
      <Footer />
    </div>
  )
}

export default Home
