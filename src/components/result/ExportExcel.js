import React from "react";
import FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ExportExcel = ({ csvData, fileName }) => {
    const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
     const fileExtension = ".xlsx";

    const Heading = [
      {
        registerDt: "접수일",
        sampleName: "검체명",
        reportedDt: "보고일",
        inspectionDt: "오더일",
        inspectionName: "검체명",
        figures: "수치",
        note: "비고",
        sampleNote: "검체비고",
      }
    ];

    const exportToCSV = (csvData, fileName, wscols) => {
        const ws = XLSX.utils.json_to_sheet(Heading, {
            header: ["registerDt", "sampleName", "reportedDt", "inspectionDt", "inspectionName", "figures", "note", "sampleNote" ],
            skipHeader: true,
            origin: 0 
          });
          ws["!cols"] = wscols;
          XLSX.utils.sheet_add_json(ws, csvData, {
            header: ["registerDt", "sampleName", "reportedDt", "inspectionDt", "inspectionName", "figures", "note", "sampleNote" ],
            skipHeader: true,
            origin: -1 
          });
          const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
          const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
          const data = new Blob([excelBuffer], { type: fileType });
          FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <button
            variant="warning"
            onClick={e => exportToCSV(csvData, fileName)}
         >
            Export Xlsx
        </button>
    )
    
}

export default ExportExcel;