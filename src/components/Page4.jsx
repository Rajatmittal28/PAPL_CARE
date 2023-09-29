import React, { useEffect, useState } from "react";
import { read, utils } from "xlsx";
import "../index.css";

function Page4() {
  const [excelData, setExcelData] = useState([]);
  const [popupData, setPopupData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Call the function to read the Excel file
      readExcelFile(file);
    }
  };

  function readExcelFile(file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = read(data, { type: "binary" });

      // Assuming the first sheet in the Excel file contains the data
      const sheetName = workbook.SheetNames[0];
      const excelData = utils.sheet_to_json(workbook.Sheets[sheetName]);

      // Set the Excel data in the component state
      setExcelData(excelData);

    };

    reader.readAsBinaryString(file);
  }

  const handleMouseEnter = (row) => {
    setPopupData(row);
    // console.log("popup data : ", popupData);
  }

  const handleMouseLeave = () => {
    setPopupData(null);
  }

  useEffect(() => {
  }, [popupData]);


  return (
    <div className="page4">
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <h2>Excel Data</h2>
      <ul>
        {excelData.map((row, index) => (
          <li key={index}
            onMouseEnter={() => handleMouseEnter(row)}
            onMouseLeave={handleMouseLeave}
            
          >
            {JSON.stringify(row["Vehicle No"])}
          </li>
        ))}
      </ul>

      {popupData && (
        <div className="popup">
          <h2>{popupData["Vehicle No"]}</h2>
          <p>Driver Code: {JSON.stringify(popupData["Driver Code"])}</p>
          <p>Driver Name: {JSON.stringify(popupData["Driver Name"])}</p>
          <p>Driver Ph. No.: {JSON.stringify(popupData["Driver Ph. No."])}</p>
          <p>Driver Code: {JSON.stringify(popupData["Date Of Joining"])}</p>
          <p>Driver Code: {JSON.stringify(popupData["Licence No."])}</p>
          <p>Driver Code: {JSON.stringify(popupData["Licence Exp. Date"])}</p>
        </div>
      )}
    </div>
  );
}

export default Page4;
