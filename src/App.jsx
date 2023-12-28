import {Routes, Route} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Course from "./Pages/Course"
import Attendance from "./Pages/Attendance"
import Reports from "./Pages/Reports"
import Sidenav from "./components/Sidenav"
function App(){

    return <Sidenav>
    <Routes>
        <Route path="/" element={<Dashboard />}  />
        <Route path="/course" element={<Course />}  />
        <Route path="/attendance" element={<Attendance />}  />
        <Route path="/report" element={<Reports />}  />
    </Routes>
    </Sidenav>
}

export default App