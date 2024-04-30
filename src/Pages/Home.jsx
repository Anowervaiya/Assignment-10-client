import React from 'react';

import TouristSpot from '../Components/TouristSpot';
import Banner from '../Components/Banner/Banner';
import Countries from '../Components/Countries';
import Sponsor from '../Components/Sponsors';
import TotallUser from '../Components/UserStatistics';

function Home() {
  return (
    <div>
      <Banner></Banner>

      <TotallUser></TotallUser>
      <TouristSpot></TouristSpot>
      <Countries></Countries>

      <Sponsor></Sponsor>
    </div>
  );
}

export default Home;
