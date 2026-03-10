import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, onDelete, onMarkStatus }) => {
  return (
    <>
      <h3 style={{ marginTop: "30px" }}>Registered Students</h3>

      {students.length === 0 ? (
        <p>No students in the list. Please add some.</p>
      ) : (
        students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onDelete={onDelete}
            onMarkStatus={onMarkStatus}
          />
        ))
      )}
    </>
  );
};

export default StudentList;
