import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentCard from './components/StudentCard';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (data) => {
    
    setStudents([...students, { id: Date.now(), ...data, status: 'Absent' }]);
  };

  const deleteStudent = (id) => setStudents(students.filter(s => s.id !== id));

  const markStatus = (id, newStatus) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };


  const total = students.length;
  const present = students.filter(s => s.status === 'Present').length;
  const absent = total - present;

  return (
    <div className="container">
      <h1>Student Activity Manager</h1>
      
      <div className="dashboard">
        Dashboard: Total: {total} | Present: {present} | Absent: {absent}
      </div>

      <StudentForm onAddStudent={addStudent} />

      <h3 style={{marginTop: '30px'}}>Registered Students</h3>
      {students.length === 0 ? <p>No students in the list.</p> : 
        students.map(s => (
          <StudentCard 
            key={s.id} 
            student={s} 
            onDelete={deleteStudent} 
            onMarkStatus={markStatus} 
          />
        ))
      }
    </div>
  );
}

export default App;