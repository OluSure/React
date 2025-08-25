import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
[
  {
    name: 'TObi',
    role: 'Full Stack Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
    {
    name: 'BObi',
    role: 'Business Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
    {
    name: 'CObi',
    role: 'JavaScript Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
  {
    name: 'DObi',
    role: 'Product Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
  {
    name: 'FObi',
    role: 'Community Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
  {
    name: 'GObi',
    role: 'Web Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
  {
    name: 'HObi',
    role: 'Building Developer',
    img: 'https://images.pexels.com/photos/31585377/pexels-photo-31585377.jpeg?cs=srgb',
  },
]);
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
  console.log(uuidv4());
   return ( 
   <Employee
   key={uuidv4()}
   name={employee.name}
   role={employee.role}
   img={employee.img}
   />
);
})}
</div>
</>
) : (
      <p>You cant see the employees list</p>
      )}
    </div>
  );
}

export default App;
