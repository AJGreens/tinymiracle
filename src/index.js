import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./css/admin.css";
import "./css/user.css";
import DocumentMeta from "react-document-meta";

const meta = {
  title: "Tiny Miracles Petcare and Rescue",
  description:
    "Tiny Miracles Farm Petcare and Rescue, Chalfont, PA.  A loving pet boarding/daycare facility and non-profit rescue devoted to finding homes for animals in need.",
  canonical: "https://tinymiraclespcr.org/",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "react,meta,document,html,tags",
    },
  },
};

ReactDOM.render(
  <div>
    <DocumentMeta {...meta} />
    <App />
  </div>,
  document.getElementById("root")
);
