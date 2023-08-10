import React from 'react';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import './TvShows.css';
function TvShows() {
  return (
    <div className='TvShows'>
        <Banner/>
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title ="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default TvShows;
