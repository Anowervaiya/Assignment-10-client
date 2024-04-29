import React from 'react';

import TouristSpot from '../Components/TouristSpot';
import Banner from '../Components/Banner/Banner';
import Countries from '../Components/Countries';

function Home() {
  return (
    <div>
    
      <Banner></Banner>
      <TouristSpot></TouristSpot>
      <Countries></Countries>
    </div>
  );
}

export default Home;
