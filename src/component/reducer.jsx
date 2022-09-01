import NewStudents from "./NewStudents";
import StudentEdit from "./StudentEdit";
import Students from "./Students";

const Reducer = (state = "", action) => {
  switch (action) {
    case NewStudents:
      return <NewStudents />;
    case StudentEdit:
      return <StudentEdit />;
    default:
      return <Students />;
  }
};

export default Reducer;
