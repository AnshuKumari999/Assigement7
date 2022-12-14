import React, { useContext } from "react";
import { add } from "./Detail";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const StudentEdit = () => {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [course, setCourse] = useState("");

  const [batch, setBatch] = useState("");

  const { id } = useParams();

  const [students, setStudents] = useContext(add);

  const ChangeHandlerName = (e) => {
    setName(e.target.value);
  };
  const ChangeHandlerAge = (e) => {
    setAge(e.target.value);
  };
  const ChangeHandlerCourse = (e) => {
    setCourse(e.target.value);
  };
  const ChangeHandlerStudent = (e) => {
    setBatch(e.target.value);
  };
  useEffect(() => {
    students.forEach((element) => {
      if (element.id === id) {
        setName(element.Name);
        setAge(element.Age);
        setCourse(element.Course);
        setBatch(element.Batch);
      }
    });
  }, [id, students]);

  const SubmitHandler = () => {
    setStudents((previousV) =>
      previousV.map((add) =>
        add.id === id
          ? {
              id: id,
              Name: name,
              Age: age,
              Batch: batch,
              Course: course
            }
          : add
      )
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form style={{ marginTop: "25px" }}>
        <label>Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={ChangeHandlerName}
        />
        <label>Age:</label>
        <input
          id="age"
          type="text"
          name="age"
          value={age}
          onChange={ChangeHandlerAge}
        />
        <label>Course:</label>
        <input
          id="course"
          type="text"
          name="course"
          value={course}
          onChange={ChangeHandlerCourse}
        />
        <label>Batch:</label>
        <input
          id="batch"
          type="text"
          name="batch"
          value={batch}
          onChange={ChangeHandlerStudent}
        />
        <div style={{ marginTop: "25px" }}>
          <Link to="/Students">
            <button style={{ marginLeft: "25px" }}>Cancel</button>
          </Link>
          <Link to="/Students" onClick={SubmitHandler}>
            <button>Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default StudentEdit;
