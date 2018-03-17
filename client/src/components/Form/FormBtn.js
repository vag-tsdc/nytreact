import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="waves-effect waves-light btn btn btn-success">
    {props.children}
  </button>;
