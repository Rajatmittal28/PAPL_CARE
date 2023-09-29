import React, { useEffect, useState } from "react";
import jsonData from "./Vehicle_No_3539.json";
import { Map, GoogleApiWrapper, Polyline, Marker } from "google-maps-react";

function Page6(props) {
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

  const mapStyles = {
    width: "100%",
    height: "500px",
  };
  const { google } = props;

  const locations = filteredData.map((entry) => ({
    lat: parseFloat(entry.Lattitude),
    lng: parseFloat(entry.Longitude),
  }));

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

      <Map
        google={google}
        zoom={10}
        style={mapStyles}
        // initialCenter={locations[0]} // Set initial map center to the first location
        initialCenter={{
          lat: 28.6139, 
          lng: 77.209
        }}
      >
        {/* Markers for each location */}
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location}
            label={(index + 1).toString()} // Use numbers as labels
          />
        ))}

        {/* Polyline to connect all locations */}
        <Polyline
          path={locations}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAlOXjePa3wBnpr8fM0N-BSxJ-0vTWcoEM", // Replace with your Google Maps API key
})(Page6);
