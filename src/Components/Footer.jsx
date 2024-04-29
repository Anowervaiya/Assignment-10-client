import React from 'react';

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-24 px-5">
        <div className="container mx-auto grid grid-cols-5 ">
          <div className="lg:col-span-2 md:col-span-2 col-span-5 lg:text-start md:text-start text-center">
            <h1 className="lg:text-4xl md:text-3xl text-2xl lg:font-extrabold md:font-extrabold font-semibold ">
              Get In Touch{' '}
            </h1>
            <p className="text-gray-400 font-semibold my-6">
              A real estate agency website showcases properties for sale or rent
              with detailed listings and search functionality, connecting buyers
              and sellers efficiently online.
            </p>
            <div className="flex gap-4 items-center lg:justify-start md:justify-start justify-center">
              <i className="fa-solid fa-envelope text-2xl text-gray-400"></i>
              <p className="text-gray-400">residentor@support.com</p>
            </div>
            <div className="flex gap-4 items-center lg:justify-start md:justify-start justify-center ">
              <i className="fa-solid fa-phone text-2xl text-gray-400"></i>
              <p className="text-gray-400">(+62) 123-321-543</p>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-3  mt-10   flex flex-col text-gray-400 font-semibold gap-5 lg:text-start md:text-start text-center">
            <h3 className="text-white font-bold text-xl">Company</h3>
            <a href="#">About Us</a>
            <a href="#">Leadership</a>
            <a href="#">Careers</a>
            <a href="#">News & Article</a>
            <a href="#">Legal Notice</a>
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-2  mt-10 flex flex-col text-gray-400 font-semibold gap-5 lg:text-start md:text-start text-center">
            <h3 className="text-white font-bold text-xl">Support</h3>
            <a href="#">FAQ</a>
            <a href="#">Help Center </a>
            <a href="#">Contact Us</a>
            <a href="#">Ticket support</a>
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-5 mt-10  flex flex-col text-gray-400 font-semibold gap-5 lg:text-start md:text-start text-center">
            <h3 className="text-white font-bold text-xl">Services</h3>
            <a href="#">All Services </a>
            <a href="#">B2B Services</a>
            <a href="#">B2C Services</a>
            <a href="#">Private Services</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
