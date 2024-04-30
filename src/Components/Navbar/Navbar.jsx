
import React, { useContext } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';

// import auth from '../authentication/authentication';

import { FaCircleUser } from 'react-icons/fa6';
import { signOut } from 'firebase/auth';
import { ContextAPI } from '../../AuthContext/ContextProvider';

const Navbar = props => {
const {user,loader,signInOut}=useContext(ContextAPI)
  const navigate = useNavigate();
  const signInOutfn = () => {
    signInOut()
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log('sign out error'));
  };
  
  // if(!user) return <Navigate to={'/'}></Navigate>
  return (
    <div className="navbar ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-4 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 z-50 rounded-box w-52"
          >
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>

            <li>{user && <NavLink to={'/addTourist'}>Add Tour </NavLink>}</li>

            <li>{user && <NavLink to={'/mytour'}>My Tourist Spot</NavLink>}</li>
            <li>{<NavLink to={'/alltour'}>All Tourist Spot</NavLink>}</li>
            <li>{<NavLink to={'/about'}>About Us</NavLink>}</li>
            <li>{<NavLink to={'/contact'}>Contact Us</NavLink>}</li>
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost md:text-xl">
          Lardix Tour{' '}
        </Link>
      </div>

      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>

          <li>{user && <NavLink to={'/addTourist'}>Add Tour </NavLink>}</li>

          <li>{user && <NavLink to={'/mytour'}>My Tourist Spot</NavLink>}</li>
          <li>{<NavLink to={'/alltour'}>All Tourist Spot</NavLink>}</li>
          <li>{<NavLink to={'/about'}>About Us</NavLink>}</li>
          <li>{<NavLink to={'/contact'}>Contact Us</NavLink>}</li>
        </ul>
      </div>
      <div className="navbar-end">
       
        <div
          tabIndex={0}
          role="button"
          className=" flex items-center justify-center  avatar"
        >
          {user ? (
            <>
              <div className="w-8 rounded-full">
                {<img title={user.displayName} src={user.photoURL} />}
              </div>

              <button
                className="ml-2 md:ml-6  md:font-semibold "
                onClick={signInOutfn}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <FaCircleUser size={'2rem'} />
              <NavLink className={'text-xs md:text-xl px-2'} to={'/signUp'}>
                Sign Up
              </NavLink>
              <NavLink className={'text-xs md:text-xl '} to={'/logIn'}>
                Sign in
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;























// import React, { useContext } from 'react';
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from '@material-tailwind/react';
// import {
//   ChevronDownIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline';
// import {
//   Bars4Icon,
//   GlobeAmericasIcon,
//   NewspaperIcon,
//   PhoneIcon,
//   RectangleGroupIcon,
//   SquaresPlusIcon,
//   SunIcon,
//   TagIcon,
//   UserGroupIcon,
// } from '@heroicons/react/24/solid';
// import { Link, NavLink } from 'react-router-dom';
// import { ContextAPI } from '../../AuthContext/ContextProvider';




// function NavList() {

//   // const {}= useContext(ContextAPI)
// const {user}= useContext(ContextAPI)
//   // const {}= useContext(ContextAPI)

//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <NavLink to={'/'} className="flex items-center gap-2 py-2 pr-4">
//           Home
//         </NavLink>
//       </Typography>

//       {user && (
//         <Typography
//           as="a"
//           href="#"
//           variant="small"
//           color="blue-gray"
//           className="font-medium"
//         >
//           <NavLink
//             to={'/alltour'}
//             className="flex items-center gap-2 py-2 pr-4"
//           >
//             All Tourist Spot
//           </NavLink>
//         </Typography>
//       )}

//       {user && (
//         <Typography
//           as="a"
//           href="#"
//           variant="small"
//           color="blue-gray"
//           className="font-medium"
//         >
//           <NavLink to={'/mytour'} className="flex items-center gap-2 py-2 pr-4">
//             My Tours
//           </NavLink>
//         </Typography>
//       )}
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <NavLink to={'/contact'} className="flex items-center gap-2 py-2 pr-4">
//           Contact Us
//         </NavLink>
//       </Typography>

//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <NavLink to={'/aboutUs'} className="flex items-center gap-2 py-2 pr-4">
//           About Us
//         </NavLink>
//       </Typography>
//     </List>
//   );
// }

// export function NavbarWithMegaMenu() {

  
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       'resize',
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   return (
//     <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5 lg:ml-2"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <div className="hidden gap-2 lg:flex">
//           <Button variant="text" size="sm" color="blue-gray">
//             <Link to={'/logIn'}> Log In</Link>
//           </Button>
//           <NavLink
//             className={
//               'w-full text-white bg-black py-1 rounded-lg text-center '
//             }
//             to={'/signUp'}
//           >
//             Sign Up
//           </NavLink>
//         </div>
//         <IconButton
//           variant="text"
//           color="blue-gray"
//           className="lg:hidden"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//         <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
//           <NavLink
//             className={'w-full bg-black p-1 rounded-lg text-center '}
//             to={'/logIn'}
//           >
//             Sign In
//           </NavLink>
//           <NavLink
//             className={'w-full bg-black p-1 rounded-lg text-center '}
//             to={'/signUp'}
//           >
//             Sign Up
//           </NavLink>
//         </div>
//       </Collapse>
//     </Navbar>
//   );
// }
