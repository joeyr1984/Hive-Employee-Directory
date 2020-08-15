import React, { Component } from "react";
import Header from "./components/Header";
import TableRow from "./components/TableRow";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import employees from "./employee.json";


class App extends Component {
  state = {
    employees
  };

  render() {

    return (
<div>
      <Navbar />
      <Header />   
      <Table>
        {this.state.employees.map(employee => (
          <TableRow
        
            key={employee.id}
            image={employee.image}
            name={employee.name}
            occupation={employee.occupation}
            email={employee.email}
            phone={employee.phone}
          />
        ))}
     
      </Table>
      </div>
  );
  }
}

export default App;
