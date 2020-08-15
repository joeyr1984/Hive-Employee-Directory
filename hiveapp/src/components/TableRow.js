import React from "react";


function TableRow(props) {
  return (
    <tr>
      <td><img class="img-fluid" alt={props.name} src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default TableRow;
