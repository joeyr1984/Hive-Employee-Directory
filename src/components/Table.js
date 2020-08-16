import React from "react";


function Table(props) {

  return (
    <section>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Occupation</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
  {props.children}
  </tbody>
</table>
    </section>
  );

}

export default Table;