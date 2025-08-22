import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';


function App() {
  const [role, setRole] = useState('dev');
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
  <div className="bg-red-300 flex flex-wrap">
<Employee name="Tobfi" role="Intern" />
<Employee name="jobi" role={role} />
<Employee name="dobi" />
<Employee name="Todi" role="Intern" />
<Employee name="kobi" role={role} />
<Employee name="pobi" />
<Employee name="fobfi" role="Intern" />

</div>
</>
) : (
      <p>You cant see the employees list</p>
      )}
    </div>
  );
}

export default App;
