
import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'
import { ContextAPI } from '../AuthContext/ContextProvider';
function Root() {


  const {loader}=useContext(ContextAPI)
  
 if (loader) {
   return (
     <div className="flex justify-center items-center min-h-screen">
       <span className="loading loading-bars loading-lg"></span>
     </div>
   );
 }
  return (
    <div>
       <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root