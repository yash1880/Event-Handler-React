import { useState } from "react";

const StudentCard = ({ student, onDelete, onMarkStatus }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="student-item">
      <span className="student-name">{student.name}</span>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "Show Details"}
      </button>

      {show && (
        <div className="details-box">
          <div>Roll No: {student.rollNo}</div>
          <div>Contact: {student.contact}</div>
          <div>
            Current Status:{" "}
            <span className="status-text">{student.status}</span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button
              className="btn-present"
              onClick={() => onMarkStatus(student.id, "Present")}
            >
              Mark Present
            </button>
            <button
              className="btn-absent"
              onClick={() => onMarkStatus(student.id, "Absent")}
            >
              Mark Absent
            </button>
            <button className="btn-delete" onClick={() => onDelete(student.id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
