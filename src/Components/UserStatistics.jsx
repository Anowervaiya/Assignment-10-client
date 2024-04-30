import React from 'react';
import { GiPodiumWinner } from 'react-icons/gi';
import { FaChartLine } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

function TotallUser() {
  return (
    <div className='my-12 text-center'>
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl poppins-semibold">
          User Statistics
        </h1>

        <p
          className="text-gray-500 text-xl  lg:w-3/5 w-9/12 mx-auto
        text-center mt-4 mb-16"
        >
          Our user is satisfied with us because they won what actually they were
          searching . here a statistics of our all user
        </p>
      </div>{' '}
      <div className="stats  shadow">
        <div className="stat">
          <div className="stat-figure text-3xl text-primary">
            <GiPodiumWinner />
          </div>
          <div className="stat-title">Statisfied User </div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary text-3xl">
            <FcApproval />
          </div>
          <div className="stat-title">Active User</div>
          <div className="stat-value text-secondary">2.6k</div>
          <div className="stat-desc">16% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-3xl text-green-500">
            <MdOutlineWorkspacePremium />
          </div>
          <div className="stat-title">Premium User </div>
          <div className="stat-value text-green-500">15.3K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-2xl">
            <FaChartLine />
          </div>
          <div className="stat-title">User Satisfaction Rate</div>
          <div className="stat-value">86%</div>
          <div className="stat-desc">30% more than last month</div>
        </div>
      </div>
    </div>
  );
}

export default TotallUser;
