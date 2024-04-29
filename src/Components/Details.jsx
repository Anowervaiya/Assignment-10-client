import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

const Details = props => {
  const [singleData] = useLoaderData();


  const {
    photo,
    name,
    
User_Name,
    country_Name,
    description,
    TotalVisitors,
    average_cost,
    location,
    seasonality,
    travel_time,
  } = singleData;

  // const [first, second, third] = facilities;

  return (
    <Card shadow={false} className=" my-10 min-h-screen flex flex-col container mx-auto  md:flex-row gap-8 p-4">
      <CardHeader
       shadow={false}
        floated={false}
        className="m-0 md:w-2/5 shrink-0 md:rounded-r-none"
      >
        <img
          src={photo}
          alt="card-image"
          className=" w-full h-[444px] rounded-lg rounded-r-none "
        />
      </CardHeader>
      <div className="text-xl font-semibold space-y-4">
        <Typography variant="h4" color="blue-gray" className="mb-4 ">
          Spot Name :{name}
        </Typography>
        <hr />
        <Typography variant="h6" color="gray">
          User Name:
          {User_Name}
        </Typography>
        <hr />
        <Typography variant="h6" color="gray">
          Country : {country_Name}
        </Typography>
        <hr />
        <Typography variant="h6" color="gray">
          Description:
          {description}
        </Typography>
        <hr />
        <Typography variant="h6" color="gray">
          seasonality : {seasonality}
        </Typography>
        <hr />

        <Typography variant="h6" color="gray">
          Travel Time : {travel_time}
        </Typography>
        <hr />
        <Typography variant="h6" color="gray">
          Average Cost :{average_cost}
        </Typography>
        <hr />
        <Typography variant="h6" color="gray">
          Total Visitors : {TotalVisitors}
        </Typography>
      
      </div>
    </Card>
  );
};

export default Details;
