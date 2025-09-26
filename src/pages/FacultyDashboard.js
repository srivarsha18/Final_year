import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/FacultyDashboard.css";

function FacultyDashboard() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">📌 Menu</h2>
        <ul>
          <li><Link to="create-test">➕ Create Test</Link></li>
          <li><Link to="view-tests">📋 View All Tests</Link></li>
          <li><Link to="generate-report">📊 Generate Report</Link></li>
          <li><Link to="register-student">🧑‍🎓 Register New Student</Link></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="dashboard-container">
        <h2>👨‍🏫 Faculty Dashboard</h2>

        {/* Nested page renders here */}
        <Outlet />
      </main>
    </div>
  );
}

export default FacultyDashboard;
