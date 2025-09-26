import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import LabTestPage from "./pages/LabTestPage";
import CreateTest from "./pages/CreateTest";
import ViewAllTests from "./pages/ViewAllTests";
import GenerateReport from "./pages/GenerateReport";
import RegisterStudent from "./pages/RegisterStudent";

function App() {
  return (
    <Routes>
      {/* Default redirect to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login and student routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/test" element={<LabTestPage />} />

      {/* Faculty dashboard with nested routes */}
      <Route path="/faculty/*" element={<FacultyDashboard />}>
        <Route path="create-test" element={<CreateTest />} />
        <Route path="view-tests" element={<ViewAllTests />} />
        <Route path="generate-report" element={<GenerateReport />} />
        <Route path="register-student" element={<RegisterStudent />} />
      </Route>
    </Routes>
  );
}

export default App;
