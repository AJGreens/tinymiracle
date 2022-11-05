import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { database } from "../Firebase";
import { ref, onValue, remove, update } from "firebase/database";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ViewApplications() {
  const [allAdoptionForms, setAllAdoptionForms] = useState([]);

  useEffect(() => {
    const adoptionFormsRef = ref(database, "adoptionForms");
    let formArr = [];
    onValue(adoptionFormsRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        formArr = Object.entries(data).map(([key, value]) => {
          return {
            token: key,
            date: value["date"],
            dog: value["name"],
            appName: value["applicantName"],
            city: value["address"].city,
            state: value["address"].state,
          };
        });
        setAllAdoptionForms(formArr.reverse());
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
      dataField: "dog",
      text: "Dog",
      filter: textFilter(),
    },
    {
      dataField: "appName",
      text: "App Name",
      filter: textFilter(),
      formatter: (cell, row) => {
        return <Link to={"/viewApplications/" + row.token}>{row.appName}</Link>;
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
            onClick={() => {
              handleDelete(row.token);
            }}
          >
            Delete
          </Button>
        );
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

  async function handleDelete(token) {
    const deleteApplication = ref(database, "adoptionForms/" + token); //original delete functionality, also function not originally async

    const saveDeletedApplication = ref(
      database,
      "deletedAdoptionForms/" + token
    );
    if (window.confirm("Are you sure you want to delete this item?")) {
      await onValue(deleteApplication, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          update(saveDeletedApplication, {
            name: data["applicantName"],
            dog: data["name"],
          });
        }

        // remove(deleteApplication);
      }); //end of onvalue
      remove(deleteApplication);

      // remove(deleteApplication); //original delete functionality
    }
  }

  return (
    <>
      <AdminNav />
      {allAdoptionForms != null && (
        <div className="container">
          <h2>View Applications</h2>

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
export default ViewApplications;
