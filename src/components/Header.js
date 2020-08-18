import React, { Component, useState } from "react";
import TableRow from "./TableRow";
import Table from "./Table";
import employees from "../employee.json";



let rows = [];
const styles = {
  headerStyle: {
    background: "white",
    height: 300
  },
  inputBox: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center"
  },
  inputStyle: {
    height: 40,
    width: 550,
    padding: 15,
    borderRadius: 60,
    paddingRight: 100

  },
  buttonStyle: {
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // right: 0,
    color: "white",
    backgroundColor: "#2e3131",
    borderRadius: 60,
    height: 40,
    width: 100,
    fontSize: 18,
    cursor: "pointer"
  },
  h1: {
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 30,
    textAlign: "center"
  },
  searchButton: {
    marginLeft: -100
  }
};

// We use JSX curly braces to evaluate the style object

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initial: employees,
      updated: employees
    };

    
  }

  filteredList = (e) => {
    let updatedList = this.state.initial;
    updatedList = updatedList.filter(obj => {
     return obj.name.toLowerCase().search(
        e.target.value.toLowerCase()
      ) !== -1;
    });
    //state.updated = updatedList
    this.setState({
      updated: updatedList
    })
    console.log(updatedList);
    
  }



render() {

  return (
    <>
      <header style={styles.headerStyle} class="container">
        <div style={styles.inputBox} class="">
          <input onChange={this.filteredList}style={styles.inputStyle} type="text" class="form-control mt-5" 
          placeholder="First Name" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
          <div style={styles.searchButton} class="input-group-append">
            <button style={styles.buttonStyle} class="btn btn-outline-secondary mt-5" type="button" id="button-addon2">Search</button>
          </div>
        </div>
        <h1 style={styles.h1} class="mt-5">DIRECTORY</h1>
      </header>

      <Table>
        {this.state.updated.map(employee => (
          <TableRow

            key={employee.id}
            image={employee.image}
            name={employee.name}
            occupation={employee.occupation}
            email={employee.email}
            phone={employee.phone}
          />
        ))}
{rows}
      </Table>
    </>
  );
}
}

export default Header;
