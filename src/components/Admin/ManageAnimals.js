import React, { useState, useEffect } from "react";
import { database, storage } from "../Firebase";
import { ref, onValue, remove } from "firebase/database";
import { ref as sRef, deleteObject, listAll } from "firebase/storage";
import AdminNav from "./AdminNav";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";

function ManageAnimals() {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dogRef = ref(database, "animals/");
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        let adoptableDogs =
          data.adoptable == null
            ? []
            : Object.entries(data.adoptable).map(([key, value]) => {
                return {
                  token: key,
                  id: value["id"],
                  name: value["name"],
                  status: value["status"],
                  fosterName: value["fosterName"],
                  fosterToken: value["fosterToken"],
                  primBreed: value["primBreed"],
                  dateAdded: value["dateAdded"],
                  dateAdopted: value["dateAdopted"],
                };
              });
        let otherDogs =
          data.other == null
            ? []
            : Object.entries(data.other).map(([key, value]) => {
                return {
                  token: key,
                  id: value["id"],
                  name: value["name"],
                  status: value["status"],
                  fosterName: value["fosterName"],
                  fosterToken: value["fosterToken"],
                  primBreed: value["primBreed"],
                  dateAdded: value["dateAdded"],
                  dateAdopted: value["dateAdopted"],
                };
              });
        setDogs([...adoptableDogs, ...otherDogs]);
      } else {
        setDogs([]);
      }
    });
  }, []);

  function addAnimalFunc() {
    navigate("/addAnimal");
  }

  function deleteFunc(token, status, fosterToken) {
    let deleteable;
    if (status === "Adoptable") {
      deleteable = ref(database, "animals/adoptable/" + token);
    } else {
      deleteable = ref(database, "animals/other/" + token);
    }
    if (window.confirm("Are you sure you want to delete this item?")) {
      remove(deleteable);
      remove(
        ref(
          database,
          "contacts/active/" + fosterToken + "/currFostering/" + token
        )
      );
      deleteObject(sRef(storage, token + "/img"));
      listAll(sRef(storage, token + "/files")).then((res) => {
        res.items.forEach((item) => {
          deleteObject(item);
        });
      });
    }
  }

  const { SearchBar } = Search;

  const selectOptions = {
    Adoptable: "Adoptable",
    Adopted: "Adopted",
    Crosspost: "Crosspost",
    Hold: "Hold",
    Pending: "Pending",
    Removed: "Removed",
  };

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Name",
      filter: textFilter(),
      formatter: (cell, row) => {
        if (row.status === "Adoptable") {
          return (
            <Link to={"/editAnimal/adoptable/" + row.token}>{row.name}</Link>
          );
        } else {
          return <Link to={"/editAnimal/other/" + row.token}>{row.name}</Link>;
        }
      },
    },
    {
      dataField: "primBreed",
      text: "Breed",
      filter: textFilter(),
    },
    {
      dataField: "fosterName",
      text: "Foster",
      filter: textFilter(),
    },
    {
      dataField: "status",
      text: "Status",
      formatter: (cell) => selectOptions[cell],
      formatter: (cell, row) => {
        return (
          <div key={row.id}>
            {row.dateAdopted ? row.status + " " + row.dateAdopted : row.status}
          </div>
        );
      },
      filter: selectFilter({ options: selectOptions }),
    },
    {
      dataField: "dateAdded",
      text: "Date Added",
      filter: textFilter(),
    },
    {
      dataField: "delete",
      text: "Delete",
      formatter: (cell, row) => {
        return (
          <Button
            onClick={() => deleteFunc(row.token, row.status, row.fosterToken)}
            variant="danger"
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

  return (
    <>
      <AdminNav />
      <div className="container">
        <h2>Manage Animals</h2>
        <Button onClick={addAnimalFunc}>Add animal</Button>
        <br />
        <br />
        <ToolkitProvider
          keyField="id"
          data={dogs}
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
    </>
  );
}

export default ManageAnimals;
