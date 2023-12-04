


export default function EmployeeList ({ employees}) {
  return (
    <div className="Employee">
      {employees
        .map((employee) => (
          <div key={employee.id} className="person">
            <img src={employee.avatar}  />           
              <h3>{`${employee.first_name} ${employee.last_name}`}</h3>
              <p>Email: {employee.email}</p>            
          </div>
        ))}
    </div>
  );
};


