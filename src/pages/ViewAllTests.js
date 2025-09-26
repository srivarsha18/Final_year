import React, { useEffect, useState } from "react";
import "../styles/FacultyDashboard.css"; // reuse styles for cards

function ViewTests() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with API call to fetch tests
    const fetchTests = async () => {
      try {
        // Example: await fetch("/api/tests")
        // const data = await response.json();

        // Temporary dummy data
        const data = [
          { title: "Mathematics Test 1" },
          { title: "Physics Test 1" },
          { title: "Chemistry Test 1" },
        ];

        setTests(data);
      } catch (error) {
        console.error("Error fetching tests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  if (loading) return <p>Loading tests...</p>;

  if (tests.length === 0) return <p>No tests available.</p>;

  return (
    <div>
      <h3>All Tests</h3>
      <ul className="dashboard-section">
        {tests.map((test, index) => (
          <li key={index} className="dashboard-card">
            <h4>{test.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewTests;
