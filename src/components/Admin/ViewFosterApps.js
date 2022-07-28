import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { database } from "../Firebase";
import { ref, onValue } from "firebase/database";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Link } from "react-router-dom";

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
    ];
  
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
            >
              {(props) => (
                <>
                  <SearchBar {...props.searchProps} className="mb-4" />
                  <BootstrapTable
                    {...props.baseProps}
                    pagination={paginationFactory({ sizePerPage: 10 })}
                    filter={filterFactory()}
                  />
                </>
              )}
            </ToolkitProvider>
          </div>
        )}
      </>
    );

}