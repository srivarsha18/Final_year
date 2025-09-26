import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StudentDashboard.css";

function StudentDashboard() {
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Static test data
    const staticTests = [
      {
        title: "Mathematics Test 1",
        description: "Algebra and Geometry",
        date: "2025-09-30",
      },
      {
        title: "Physics Test 1",
        description: "Mechanics and Thermodynamics",
        date: "2025-10-05",
      },
      {
        title: "Chemistry Test 1",
        description: "Organic Chemistry Basics",
        date: "2025-10-10",
      },
    ];

    setTests(staticTests);
  }, []);

  const handleTestClick = (test) => {
    navigate("/test", { state: { test } });
  };

  return (
    <div className="dashboard-container">
      <h2>🎓 Student Dashboard</h2>
      <h3>Available Tests</h3>
      <ul className="test-list">
        {tests.map((test, index) => (
          <li
            key={index}
            className="test-card"
            onClick={() => handleTestClick(test)}
          >
            <h4>{test.title}</h4>
            <p>{test.description}</p>
            <p><b>Date:</b> {test.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;
