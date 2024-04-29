import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { MdInsertPageBreak } from 'react-icons/md';
import { LuUsers2 } from 'react-icons/lu';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function SingleReadList({ item }) {
  const { name, photo,  description,User_Name,country_Name } = item;

  return (
    <div className='flex gap-x-8 border-2 p-3 rounded-lg  items-center  md:w-1/2 mb-8
    '>
      <div className='flex-1'>
        <img src={photo} alt=""  className='rounded-lg max-h-[200px]' />
      </div>
      <div className='flex-1 *:mb-3' >
        <p>Name : {name}</p>
        <p>User Name: {User_Name}</p>
        <p>Description : {description}</p>
        <p>Country Name : {country_Name}</p>
        <div className='flex gap-x-8 '>
          <button className='btn bg-success hover:bg-transparent'>Update</button>
          <button className='bg-red-400 hover:bg-transparent  p-2 btn'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default SingleReadList;
