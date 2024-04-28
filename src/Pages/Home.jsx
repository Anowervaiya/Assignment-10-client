import React from 'react';
import { NavbarWithMegaMenu } from '../Components/Navbar/Navbar';
import TouristSpot from '../Components/TouristSpot';

function Home() {
  return (
    <div>
      <NavbarWithMegaMenu></NavbarWithMegaMenu>
      <TouristSpot></TouristSpot>
    </div>
  );
}

export default Home;
