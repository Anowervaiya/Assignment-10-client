import axios from 'axios';
import Swal from 'sweetalert2';

const AddTourist_Spot = () => {
  const handleAddTourist_Spot = event => {
    console.log('aice');
    event.preventDefault();

    const form = event.target;

    const name = form.TouristName.value;
    const TotalVisitors = form.TotalVisitors.value;
    const description = form.description.value;
   

    const photo = form.Photo.value;
    const average_cost = form.average_cost.value;
    const country_Name = form.country_Name.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const User_Name = form.User_Name.value;
    const Email = form.Email.value;

 
    // **
    // https://i.ibb.co/1TKJy35/download.jpg
    // https://i.ibb.co/dB6VtJ5/download.jpg
    // https://i.ibb.co/WFGhPm2/download.jpg
    // https://i.ibb.co/b7Mp63G/download.jpg
    // *

    const newTourist_Spot = {
      name,
      TotalVisitors,
      Email,
      average_cost,
      User_Name,
      country_Name,
      seasonality,
      travel_time,
      description,
    
      photo,
    };

    console.log(newTourist_Spot);

    // send data to the server
    fetch('http://localhost:3000/tour', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newTourist_Spot),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Tourist_Spot Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        }
      });

   


  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Tourist_Spot</h2>
      <form onSubmit={handleAddTourist_Spot}>
        {/* form name and totalcost row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Tourist_Spot Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="TouristName"
                placeholder="Tourist_Spot Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Total Visitors </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="TotalVisitors"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form average_cost row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">average_cost</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="average_cost"
                placeholder="average_cost"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2  ml-4">
            <label className="label">
              <span className="label-text">country_Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="country_Name"
                placeholder="country_Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* travel time  */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">travel_time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="travel_time"
                placeholder="travel_time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                type="Email"
                name="Email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Email  */}

        {/*User Name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="User_Name"
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">seasonality</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="seasonality"
                placeholder="seasonality"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* seasonality */}

        {/* location  */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="location"
                placeholder="location"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Photo </span>
            </label>
            <label className="input-group">
              <input
                type="url"
                name="Photo"
                placeholder="Photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}

        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group w-full">
              <textarea
                name="description"
                id=""
                cols="30"
                rows="4"
              ></textarea>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Tourist_Spot"
          className="btn btn-block"
        />
      </form>
    </div>
  );
};

export default AddTourist_Spot;
