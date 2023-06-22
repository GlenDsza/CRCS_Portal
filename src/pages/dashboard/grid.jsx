import { data } from "../../data/og-data";
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


function parseDate(dateString) {
  if (!dateString) {
    return 'ㅤㅤ-ㅤㅤ'; // Return null or any default value if the date is empty
  }
  const [day, month, year] = dateString.split("/");
  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
}

export function Grid() {

  const parsedResults = data.map((item) => ({
    ...item,
    "Date of Registration": parseDate(item["Date of Registration"]),
  }));
  const navigate = useNavigate();
  const gridRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(parsedResults);
  const [rowData, setRowData] = useState(parsedResults);
  const [columnDefs, setColumnDefs] = useState([
    { field: "SrNo", filter: true, maxWidth: 100, pinned: "left" },
    { field: "Name of Society", filter: true },
    {
      field: "Address",
      filter: true,
      hide: window.innerWidth >= 800 ? false : true,
    },
    { field: "Date of Registration", filter: true, maxWidth: 200, cellDataType: 'dateS' },
    { field: "Sector Type", filter: true, maxWidth: 150 },
  ]);
  const defaultColDef = useMemo(() => ({
    sortable: true,
    resizable: true,
  }));


  // Cell click event
  const cellClickedListener = useCallback((event) => {
    navigate(`/dashboard/society/${event.data["SrNo"]}`);
    console.log("cellClicked", event.data);
  }, []);
  const onGridReady = (e) => {
    const { api, columnApi } = gridRef.current;
    if (window.innerWidth > 500) {
      e.api.sizeColumnsToFit();
    }
    e.columnApi.resetColumnState();
    setRowData(filteredResults);
  };


  // Searching handler
  const handleSearch = () => {
    const searchResults = data.filter((item) =>
      item["Name of Society"].toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(searchResults);
    setRowData(searchResults);
    if (searchResults.length === 0) {
      // Handle the case when no results are found
      // For example, you can display a message or perform any desired action
      console.log("No results found.");
    }
  };


  // Convert and saving into csv file
  const convertToCSV = () => {
    const csv = Papa.unparse(filteredResults);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const csvURL = URL.createObjectURL(csvData);
    const downloadLink = document.createElement('a');
    downloadLink.href = csvURL;
    downloadLink.setAttribute('download', 'data.csv');
    document.body.appendChild(downloadLink);
    downloadLink.click();
  };

  // COnvert into excel format and download it


  // Convert into pdf and save it
  const convertToPDF = () => {
    const doc = new jsPDF();
    const tableColumnWidths = [10, 30, 30, 20, 20, 20, 20, 20]; // Adjust the column widths as needed
    const columnOrder = ['SrNo', 'Name of Society', 'Address','State','District','Area of Operation','Sector Type','Date of Registration'];
    const tableData = filteredResults.map((item) => columnOrder.map((column) => item[column]));

    doc.autoTable({
      head: [columnOrder],
      body: tableData,
      startY: 10,
      columnStyles: {
        0: { cellWidth: tableColumnWidths[0] },
        1: { cellWidth: tableColumnWidths[1] },
        2: { cellWidth: tableColumnWidths[2] },
        3: { cellWidth: tableColumnWidths[3] },
        4: { cellWidth: tableColumnWidths[4] },
        5: { cellWidth: tableColumnWidths[5] },
        6: { cellWidth: tableColumnWidths[6] },
        7: { cellWidth: tableColumnWidths[7] },
      },
    });
    const pdfDataUri = doc.output('datauristring');
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfDataUri;
    downloadLink.download = 'data.pdf';
    downloadLink.click();
  };




  return (
    <div className="z-0 mt-6">
      <div className="mb-4 grid grid-cols-1">
        <Card className="overflow-hidden">
          <CardHeader
            floated={false}
            shadow={true}
            color="transparent"
            className="m-0 flex flex-wrap items-center justify-between p-6"
          >
            <div className="order-1 flex align-baseline">
              <HomeModernIcon
                width={window.innerWidth < 500 ? 35 : 40}
                height={window.innerWidth < 500 ? 35 : 40}
                color="blue-gray"
                className="inline"
              />
              <Typography
                variant="h4"
                color="blue-gray"
                className="ml-3 mt-2 text-lg sm:text-xl md:text-2xl"
              >
                Registered Societies
              </Typography>
            </div>
            <div className="order-3 ml-auto mr-3 mt-4 flex w-full shrink-0 gap-2 md:order-2 md:mt-0 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  onChange={(e) => setSearchQuery(e.target.value)}
                  label="Search by Society Name"
                  icon={<MagnifyingGlassIcon onClick={handleSearch} className="h-5 w-5 cursor-pointer" />}
                />
              </div>
            </div>
            <div className="order-2 md:order-3">
              <Menu placement="left-start">
                <MenuHandler>
                  <IconButton size="sm" variant="text" color="blue-gray">
                    <EllipsisVerticalIcon
                      strokeWidth={3}
                      fill="currenColor"
                      className="h-6 w-6"
                    />
                  </IconButton>
                </MenuHandler>
                <MenuList>
                  <MenuItem onClick={convertToCSV}>Export to CSV</MenuItem>
                  <MenuItem onClick={convertToPDF}>Export to PDF</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </CardHeader>
          <CardBody className="ag-theme-material w-100 h-[73vh] overflow-x-auto px-0 pt-0 pb-2">
            <AgGridReact
              pagination={true}
              paginationPageSize={20}
              onGridReady={onGridReady}
              ref={gridRef} // Ref for accessing Grid's API
              rowData={rowData} // Row Data for Rows
              columnDefs={columnDefs} // Column Defs for Columns
              defaultColDef={defaultColDef} // Default Column Properties
              onCellClicked={cellClickedListener} // Optional - registering for Grid Event
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Grid;
