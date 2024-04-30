import React from 'react';
import Marquee from 'react-fast-marquee';

const Sponsor = () => (
  <>
    <div className="text-center mt-24 ">
      <h1 className="text-2xl lg:text-4xl font-semibold">OUR SPONSORS</h1>
    </div>{' '}
    <Marquee
      pauseOnHover={true}
      speed={50}
      gradient={true}
      gradientColor="rgb(248,251,253)"
      gradientWidth={200}
      className="my-12"
    >
      <div>
        <img
          src="https://i.ibb.co/HKLckxL/images-removebg-preview.png"
          alt=""
        />
      </div>
      <div>
        {' '}
        <img src="" alt="" />
      </div>
      <div>
        {' '}
        <img
          src="https://i.ibb.co/zhQmjxf/images-removebg-preview-1.png"
          alt=""
        />
      </div>
      <div>
        {' '}
        <img src="https://i.ibb.co/M6tWtXx/images.png" alt="" />
      </div>
      <div>
        {' '}
        <img src="https://i.ibb.co/0KLnd04/TARGET.png" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co/Sw6Bsw3/10-12-removebg-preview.png" alt="" />
      </div>
      <div>
        {' '}
        <img src="https://i.ibb.co/txygnvM/10-21.jpg" alt="" />
      </div>
    </Marquee>
  </>
);

export default Sponsor;
