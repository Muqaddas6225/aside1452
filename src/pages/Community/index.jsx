import React from 'react';
import News from './News';
import Giveaway from './Giveaway';
import Blogs from './Blogs';
import FilmHub from './FilmHub';
import Newsletter from 'pages/Home/Newsletter';


const Community = () => {
  return (
    <>
        <News/>
        <Giveaway/> 
        <Blogs/>   
        <FilmHub/>
        <Newsletter/>
    </>
  )
}

export default Community