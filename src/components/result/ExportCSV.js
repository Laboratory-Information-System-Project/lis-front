import React from "react";
import { CSVLink, CSVDownload } from "react-csv";

const ExportCSV = ({ csvData, fileName }) => {
    
    return (
        <CSVLink 
            data={csvData}
            filename={fileName}
        >
            <button>Export CSV</button>
        </CSVLink>
    )
};

export default ExportCSV;