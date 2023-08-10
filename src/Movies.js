import React from 'react';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import './Movies.css';

function Movies() {
  return (
    <div className='Movies'>
        <Banner/>
      <Row title ="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title ="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title ="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title ="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  )
}

export default Movies;
