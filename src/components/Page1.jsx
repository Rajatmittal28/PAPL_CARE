import React from "react";
import "../index.css";


function Page1({users}) {
 

  return (
    <div>
      <table className="table1">
        <thead className="thead1">
          <tr className="tr1">
            <th className="th1">Serial No</th>
            <th className="th1">Vehicle No</th>
            <th className="th1">Last Seen</th>
            <th className="th1">Ignition</th>
            <th className="th1">Battery</th>
            <th className="th1">Info</th>
            <th className="th1">Nearest Location</th>
            <th className="th1">Speed</th>
            <th className="th1">Tempr</th>
            <th className="th1">Angle</th>
            <th className="th1">Odometer</th>
            <th className="th1">Specifications</th>
          </tr>
        </thead>
        <tbody className="tbody1">
          {users.map((user, index) => (
            <tr className="tr1" key={index}>
              <td className="td1">{index + 1}</td>
              <td className="td1 coloryellow">{user.VehicleNo}</td>
              <td className="td1 colorblue">{user.Date}</td>
              {user.Ignition === "1" ? <td className="td1 colorgreen">ON</td> : <td className="td1 colorred">OFF</td>}
              <td className="td1 colorgreen">Connected</td>
              <td className="td1 colorblue">i</td>
              <td className="td1 colorblue">{user.Location}</td>
              <td className="td1 colorblue">{user.Speed}</td>
              <td className="td1">{user.Tempr}</td>
              <td className="td1">{user.Angle}</td>
              <td className="td1 colorgreen">{user.Odometer}</td>
              <td className="td1">specification</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page1;
