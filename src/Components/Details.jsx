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

  console.log(singleData);

  const {
    photo,
    name,
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
    <Card className=" my-10 flex flex-col container mx-auto  md:flex-row gap-8 p-4">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:w-2/5 shrink-0 md:rounded-r-none"
      >
        <img
          src={photo}
          alt="card-image"
          className=" w-full h-[450px] rounded-lg rounded-r-none "
        />
      </CardHeader>
      <CardBody className="text-xl font-semibold space-y-4">
        <Typography variant="h4" color="blue-gray" className="mb-4 ">
          Estate :{name}
        </Typography>
        <hr />

        <Typography variant="h6" color="gray" className="mb-2">
          Segment : {name}
        </Typography>
        <hr />
        <Typography variant="h6" color="gray" className="mb-2">
          Description:
          {description}
        </Typography>
        {/* <Typography variant="h6" color="gray" className="mb-2">
          Facilities: #{first}
          <span className="mx-8">#{second}</span>
          <span>#{third}</span>
        </Typography>
        <hr /> */}

        <Typography color="black" className="font-normal">
          <span className=" ">price: {name}</span>
        </Typography>
        <hr />
        <Typography color="black" className="font-normal space-x-2">
          Status: {name}
        </Typography>
        <Typography color="black" className="font-normal space-x-2">
          Location: {location}
        </Typography>
        <Typography color="black" className="font-normal space-x-2">
          Area: {name}
        </Typography>

        <hr />
      </CardBody>
    </Card>
  );
};

export default Details;
