import { useState, useRef, useEffect } from "react";

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [contact, setContact] = useState("");
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !roll || !contact) return alert("Please fill all fields");
    onAddStudent({ name, rollNo: roll, contact });
    setName("");
    setRoll("");
    setContact("");
    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="form-row">
      <input
        ref={nameRef}
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />
      <input
        placeholder="Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button type="submit" className="btn-add">
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
