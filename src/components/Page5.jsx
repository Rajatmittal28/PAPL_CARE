import React, { useEffect, useState } from "react";
import jsonData from "./Vehicle_No_3539.json";

function Page5() {
  const [vehicleData, setVehicleData] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setVehicleData(jsonData);
  }, []);

  const handleSearch = () => {
    const startTimeParts = startTime.split(':');
    const startDateTime = new Date(startDate);
    startDateTime.setHours(parseInt(startTimeParts[0], 10));
    startDateTime.setMinutes(parseInt(startTimeParts[1], 10));

    const endTimeParts = endTime.split(':');
    const endDateTime = new Date(endDate);
    endDateTime.setHours(parseInt(endTimeParts[0], 10));
    endDateTime.setMinutes(parseInt(endTimeParts[1], 10));

    // Filter travel history based on date-time range
    const filteredData = vehicleData.filter((record) => {
      const recordDateTime = new Date(record.Date);
      return recordDateTime >= startDateTime && recordDateTime <= endDateTime;
    });

    setFilteredData(filteredData);
  };

  return (
    <div>
      <div>
        <div>
          <label>Start Date: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label>Start Time: </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label>End Date: </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <label>End Time: </label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <button className="btn" onClick={handleSearch}>
          View
        </button>
      </div>
      <div>
        <table className="table1">
          <thead className="thead1">
            <tr className="tr1">
              <th className="th2">Serial No</th>
              <th className="th2">Location</th>
              <th className="th2">Vehicle No</th>
              <th className="th2">Entry Time</th>
              <th className="th2">Exit Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((vehicle, index) => (
              <tr key={index}>
                <td className="td2">{index + 1}</td>
                <td className="td2 coloryellow">{vehicle.Location}</td>
                <td className="td2 colorblue">{vehicle.VehicleNo}</td>
                <td className="td2">{vehicle.Date}</td>
                <td className="td2 colorgreen">{vehicle.callingTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page5;
