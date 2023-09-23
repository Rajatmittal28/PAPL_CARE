import React, { useState } from "react";
import "../index.css";

function Page2({ users }) {
  const [location, setLocation] = useState("");
  const[vehicles,setVehicles] = useState([]);
  var temp = [];
  const submitHandler = (e) => {
    e.preventDefault();
    users.map((user) => {
      const vehicleLocation = user.Location;
      const regex = new RegExp(location, "i");
      if (regex.test(vehicleLocation)) {
        temp.push(user);
      }
      return temp;
    })
    setVehicles(temp);
  };

  return (
    <div className="Container">
      <div className="leftContainer">
        <form onSubmit={submitHandler}>
          <div className="inputs">
            <h4>Select Group</h4>
            <input type="text" name="All" placeholder="All" />
          </div>
          <div className="inputs">
            <h4>Vehicle</h4>
            <input type="text" name="All" placeholder="Vehicle" />
          </div>
          
          <div className="inputs">
            <h4>Location</h4>
            <input
              type="text"
              name="All"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn" >
            View
          </button>
        </form>
      </div>
      {vehicles.length>0 ? <div className="rightContainer">
        <table className="table1">
          <thead className="thead1">
            <tr className="tr1">
              <th className="th2">Serial No</th>
              <th className="th2">Location</th>
              <th className="th2">Date</th>
              <th className="th2">Vehicle No</th>
              <th className="th2">Imei</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => {
              return (
                <tr key={index}>
                  <td className="td2">{index + 1}</td>
                  <td className="td2 coloryellow">{vehicle.Location}</td>
                  <td className="td2">{vehicle.Date}</td>
                  <td className="td2 colorblue">{vehicle.VehicleNo}</td>
                  <td className="td2 colorgreen">{vehicle.Imei}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> : 
            <h1>First Fill Location</h1>
        }
    </div>
  );
}

export default Page2;

