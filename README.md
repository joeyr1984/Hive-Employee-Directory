
![Hive Logo](hiveapp/public/images/logo-readme.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/)


## Description

"Hive" functions as a repo / directory that allows a user to see a list of employees. Hive also allows the user to expedite their seach by searching for a specific employee. This app was build with React

## Link to Deployed App 

## GIF of Working App

![Hive Logo](hiveapp/public/images/hive.gif)

## Mock up / Ideation Phase 

![Hive Logo](hiveapp/public/images/mock-up.png)



## Sample of Code

```javascript
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
```

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#test)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```
npm i
```

## Usage

NA

## License

This project is licensed under the MIT license.

## Contributing

NA

## Test

To run tests, run the following command:

```
NA
```

## Questions

If you have any questions about the repo, open an issue or contact [joeyr1984](https://github.com/joeyr1984/) directly at joeyr1984@gmail.com


