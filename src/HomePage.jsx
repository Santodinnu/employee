import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import EmployeeList from "./EmployeeList";
import Form from "./Form.jsx";
// import EmployeeListItems from "./EmployeeListItems";

export default function HomePage({employees,addEmployee}) {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <EmployeeList employees={employees}   />
      <Form addEmployee={addEmployee}/>
    </div>
  );
}