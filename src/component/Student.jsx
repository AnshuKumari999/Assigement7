import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { add } from "./Detail";

const Student = () => {
  const [student] = useContext(add);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <br />
          <h2>Students</h2>
          <br></br>

          <Link to="/NewStudents">
            <button className="add">Add Student</button>
          </Link>

          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            <th scope="col">Change</th>
          </tr>
        </thead>

        <tbody>
          {student.map((student) => (
            <tr key={student.id}>
              <td>{student.Name}</td>
              <td>{student.Age}</td>
              <td>{student.Course}</td>
              <td>{student.Batch}</td>
              <td>
                <Link to={`/StudentEdit/${student.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
