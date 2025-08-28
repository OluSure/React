import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';



function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
[
  {
    id: 1,
    name: 'TObi',
    role: 'Full Stack Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
    {
    id: 2,
    name: 'BObi',
    role: 'Business Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
    {
    id: 3,
    name: 'CObi',
    role: 'JavaScript Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
  {
    id: 4, 
    name: 'DObi',
    role: 'Product Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
  {
    id: 5,
    name: 'FObi',
    role: 'Community Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
  {
    id: 6,
    name: 'GObi',
    role: 'Web Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
  {
    id: 7,
    name: 'HObi',
    role: 'Building Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
]);

function updateEmployee(id, newName, newRole) {
  const updatedEmployees = employees.map((employee) => {
    if (employee.id === id) {
      return { ...employee, name: newName, role: newRole };
    }
    return employee;
  });
  setEmployees(updatedEmployees);
}

function newEmployee(name, role, img){
const newEmployee = {
    id: uuidv4(),
    name: name,
    role: role,
    img: img,
  };
  setEmployees([...employees, newEmployee]);
}

const showEmployees = true;
  return (
    <div className="App">
{showEmployees ? (
  <>
  <input type="text" onChange={(e) => {
    console.log(e.target.value);
    setRole = (e.target.value);
  }}
  />
  <div className="bg-red-300 flex flex-wrap justify-center">
{employees.map((employee) => {
const editEmployee = <editEmployee
id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee}
 />;
   return ( 
   <Employee
   key={employee.id}
   id={employee.id}
   name={employee.name}
   role={employee.role}
   img={employee.img}
   editEmployee={editEmployee}
   />
);
})}
</div>
<AddEmployee newEmployee={newEmployee} />
</>
) : ( 
      <p>You cant see the employees list</p>
      )}
    </div>
  );
}

export default App;