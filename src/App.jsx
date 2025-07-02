// App.jsx
import React, { useState } from "react";
import FileUpload from "./component/FileUpload";
import DataTable from "./component/DataTable";

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">PDF Lab Report Extractor</h1>
      <FileUpload onExtracted={setData} />
      {data.length > 0 ? (
        <>
          <h2 className="text-xl mt-6 mb-2 font-semibold">Extracted Health Parameters</h2>
          <DataTable data={data} />
        </>
      ) : (
        <p className="mt-4 text-gray-500">Upload a PDF lab report to see extracted Data</p>
      )}
    </div>
  );
};

export default App;
