import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./component/Home";
import Students from "./component/Student";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Detail from "./component/Detail";
import StudentEdit from "./component/StudentEdit";
import NewStudents from "./component/NewStudent";

function App() {
  return (
    <Detail>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/StudentEdit/:id" element={<StudentEdit />} />
            <Route path="/NewStudents" element={<NewStudents />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Detail>
  );
}

export default App;
