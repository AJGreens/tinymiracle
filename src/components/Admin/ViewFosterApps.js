import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { database } from "../Firebase";
import { ref, onValue, remove } from "firebase/database";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ViewFosterApps() {
  const [allAdoptionForms, setAllAdoptionForms] = useState([]);

  useEffect(() => {
    const fosterFormsRef = ref(database, "fosterApplications");
    let formArr = [];
    onValue(fosterFormsRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        formArr = Object.entries(data).map(([key, value]) => {
          return {
            token: key,
            date: value["date"],
            appName: value["applicantName"],
            city: value["address"].city,
            state: value["address"].state,
          };
        });
        setAllAdoptionForms(formArr);
      }
    }); //end of onvalue
  }, []);

  const { SearchBar } = Search;

  const columns = [
    {
      dataField: "date",
      text: "Date",
      filter: textFilter(),
    },
    {
      dataField: "appName",
      text: "App Name",
      filter: textFilter(),
      formatter: (cell, row) => {
        return <Link to={"/viewFosterApps/" + row.token}>{row.appName}</Link>; //need to change this lol
      },
    },
    {
      dataField: "city",
      text: "City",
      filter: textFilter(),
    },
    {
      dataField: "state",
      text: "State",
      filter: textFilter(),
    },
    {
      dataField: "delete",
      text: "Delete",
      formatter: (cell, row) => {
        return (
          <Button
            className="d-block m-auto"
            variant="danger"
            onClick={() => handleDelete(row.token)}
          >
            Delete
          </Button>
        ); //need to change this lol
      },
    },
  ];
  const ClearSearchButton = (props) => {
    const handleClick = () => {
      props.onSearch("");
    };

    return (
      <Button className="m-2" variant="secondary" onClick={handleClick}>
        Clear
      </Button>
    );
  };
  const ExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <Button className="m-2" variant="success" onClick={handleClick}>
        Download List
      </Button>
    );
  };

  function handleDelete(token) {
    const deleteFosterApp = ref(database, "fosterApplications/" + token);
    if (window.confirm("Are you sure you want to delete this item?")) {
      remove(deleteFosterApp);
    }
  }

  return (
    <>
      <AdminNav />
      {allAdoptionForms != null && (
        <div className="container">
          <h2>Foster Applications</h2>

          <ToolkitProvider
            keyField="appName"
            data={allAdoptionForms}
            columns={columns}
            search
            exportCSV={{
              exportAll: false,
              onlyExportFiltered: true,
            }}
          >
            {(props) => (
              <>
                <div className="mb-4 text-center">
                  <h4>General Search</h4>
                  <SearchBar {...props.searchProps} />
                  <br />
                  <ClearSearchButton {...props.searchProps} />
                  <ExportCSV {...props.csvProps} />
                </div>
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory({ sizePerPage: 10 })}
                  filter={filterFactory()}
                  noDataIndication="No Match"
                  striped
                  hover
                />
              </>
            )}
          </ToolkitProvider>
        </div>
      )}
    </>
  );
}
