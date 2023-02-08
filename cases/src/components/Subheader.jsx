import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import TableChartSharpIcon from "@mui/icons-material/TableChartSharp";
import Option from "../pages/Option";
import { Data } from "../pages/Data";
import Model from "../pages/Model";
import Form from "../pages/Form";
const columns = [
  {
    field: "",
    headerName: "",
    renderCell: (cellValue) => {
      return (
        <input
          type={"radio"}
          name="row"
          style={{ width: "100px", height: "20px"}}
        ></input>
      );
    },
  },
  { field: "id", headerName: "#", width: 90},
  {
    field: "Case_number",
    headerName: "Case Number",
    width: 150,
    editable: true,
  },
  {
    field: "Title",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "Product",
    headerName: "Product",
    width: 150,
    editable: true,
  },
  {
    field: "Sub_Status",
    headerName: "Sub Status",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Status",
    headerName: "Status",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Technician",
    headerName: "Technician",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Technician_Status",
    headerName: "Technician Status",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Technician_Date_Time",
    headerName: "Technician Date Time",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Account_Name",
    headerName: "Account Name",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Contact_Name",
    headerName: "Contact Name",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Mobile",
    headerName: "Mobile",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Phone",
    headerName: "Phone",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Address",
    headerName: "Address",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Opened_Time",
    headerName: "Opened Time",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Package",
    headerName: "Package",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Billable",
    headerName: "Billable",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Amount",
    headerName: "Amount",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Priority",
    headerName: "Priority",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Agent",
    headerName: "Agent",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Channel",
    headerName: "Channel",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Remarks",
    headerName: "Remarks",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "Comments",
    headerName: "Comments",
    type: "string",
    width: 110,
    editable: true,
  },
];

const channel = [
  {
    text: "All Channels",
  },
  {
    text: "Primary",
  },
  {
    text: "Secondary",
  },
];

const caseType = [
  {
    text: "All Case Type",
  },
];

const status = [
  {
    text: "ALL Status",
  },
];

const cases = [
  {
    text: "All Cases",
  },
  {
    text: "Open Cases",
  },
  {
    text: "Closed Cases",
  },
  {
    text: "Resolved Cases",
  },
  {
    text: "Billable Cases",
  },
  {
    text: "Open Package Cases",
  },
  {
    text: "Emergency Cases",
  },
  {
    text: "Unassigned Cases",
  },
  {
    text: "Unassigned Package Cases",
  },
  {
    text: "Overdue Cases",
  },
  {
    text: "Cases Due Today",
  },
  {
    text: "Cases Due Tomorrow",
  },
  {
    text: "Cases Next 7 Days",
  },
  {
    text: "All Cases",
  },
];

export default function Subheader() {
  const [data, setdata] = React.useState(Data);
  const [OneData, setOneData] = React.useState(0);
  const [search, setsearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openform, setOpenFrom] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenForm = () => setOpenFrom(true);
  const handleCloseForm = () => setOpenFrom(false);
  const handleOpenEdit= () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const deleteRow = (id) => {
    setdata(data.filter((e) => e.id !== id));
  };

  const editdata = () => {
    setEdit(!edit);
    handleOpenForm();
  };

  const searchData = () => {
    const filterdData = data.filter(
      (e) =>
        e.Account_Name.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Address.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Agent.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Amount == search.toLowerCase().replace(/\s/g, "") ||
        e.Case_number == search.toLowerCase().replace(/\s/g, "") ||
        e.Channel.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Comments.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Contact_Name.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Mobile == search.toLowerCase().replace(/\s/g, "") ||
        e.Phone == search.toLowerCase().replace(/\s/g, "") ||
        e.Priority.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Product.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Remarks.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Status.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Sub_Status.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Technician.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Title.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "") ||
        e.Technician_Status.toLowerCase().replace(/\s/g, "") ===
          search.toLowerCase().replace(/\s/g, "")
    );
    if (filterdData.length > 0) {
      setdata(filterdData);
    } else {
      alert("No data is present related to this");
    }
  };

  const getData = (e, formdata) => {
    e.preventDefault();

    if (formdata !== null) {
      setdata([...data, formdata]);
      handleCloseForm();
      setEdit(false);
    } else {
      return;
    }
  };
  return (
    <Box sx={{ height: 590, width: "100%" }}>
      <Form
        getData={getData}
        info={OneData}
        openform={openform}
        handleCloseForm={handleCloseForm}
        handleOpenForm={handleOpenForm}
      ></Form>
      <Model
        info={OneData}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      ></Model>
      <div
        className="select-div"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Option data={channel} lable={"All Channels"}></Option>
        <Option data={caseType} lable={"All Case Type"}></Option>
        <Option data={status} lable={"All Status"}></Option>
        <Option data={cases} lable={"All Cases"}></Option>

        <input
          style={{
            height: "33px",
            width: "250px",
            margin: "10px",
            border: "1.3px solid grey",
            borderRadius: "2px",
            marginRight: "20px",
          }}
          type="text"
          className="search"
          placeholder="search"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        ></input>
        <SearchIcon
          style={{ marginTop: "15px", marginLeft: "-45px", color: "grey" }}
        />
        <Button
          variant="contained"
          onClick={searchData}
          sx={{
            height: 35,
            textAlign: "center",
            cursor: "pointer",
            color: "black",
            margin: "10px",
            backgroundColor: "white",
          }}
        >
          Search
        </Button>
        <div
          className="icons"
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          <TableChartSharpIcon
            sx={{
              height: 50,
              textAlign: "center",
              cursor: "pointer",
              color: "rgb(25,118,210)",
            }}
          ></TableChartSharpIcon>
          <CalendarMonthSharpIcon
            sx={{
              height: 50,
              textAlign: "center",
              cursor: "pointer",
              color: "rgb(25,118,210)",
            }}
          ></CalendarMonthSharpIcon>
          <AddCircleIcon
            onClick={handleOpenForm}
            sx={{
              height: 50,
              textAlign: "center",
              cursor: "pointer",
              color: "rgb(25,118,210)",
            }}
          ></AddCircleIcon>
          {OneData !== 0 ? (
            <>
              <EditIcon
                onClick={() => editdata(OneData.id)}
                sx={{
                  height: 50,
                  textAlign: "center",
                  cursor: "pointer",
                  color: "rgb(25,118,210)",
                }}
              ></EditIcon>
              <DeleteRoundedIcon
                onClick={() => deleteRow(OneData.id)}
                sx={{
                  height: 50,
                  textAlign: "center",
                  cursor: "pointer",
                  color: "rgb(25,118,210)",
                }}
              ></DeleteRoundedIcon>

              <InfoSharpIcon
                onClick={handleOpen}
                sx={{
                  height: 50,
                  textAlign: "center",
                  cursor: "pointer",
                  color: "rgb(25,118,210)",
                }}
              ></InfoSharpIcon>
            </>
          ) : null}
        </div>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        onCellClick={(e) => setOneData(e.row)}
        sx={{ fontSize: 11, textAlign: "left" }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
