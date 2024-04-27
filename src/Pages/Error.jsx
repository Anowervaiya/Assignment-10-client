import React from 'react'

function Error() {
  return (
    <div className="flex justify-center items-center min-h-screen font-bold text-2xl">
      <div className="flex flex-col justify-center items-center *:mb-4">
        <img
          src="https://i.ibb.co/J21PLtC/download.jpg"
          alt=""
          className=" rounded-lg w-fit "
        />
        <h1>please give a valid path</h1>
      </div>
    </div>
  );
}

export default Error