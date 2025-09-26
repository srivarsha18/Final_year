import React, { useState } from "react";
import "../styles/FacultyDashboard.css";

function RegisterStudent() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    department: "",
    batch: "",
  });

  const [students, setStudents] = useState([
    { name: "Varsha K.V", email: "student@skct.edu.in" },
    { name: "Arun Kumar", email: "student2@skct.edu.in" },
    { name: "Sita R", email: "student3@skct.edu.in" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: formData.username,
      email: `${formData.username.toLowerCase().replace(/\s+/g, "")}@skct.edu.in`,
    };
    setStudents((prev) => [...prev, newStudent]);

    alert(`Student ${formData.username} registered successfully!`);

    setFormData({ username: "", password: "", department: "", batch: "" });
  };

  return (
    <div className="register-page">
      {/* Top Half: Form */}
      <div className="register-top">
        <h3>Register New Student</h3>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Batch:</label>
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Register Student</button>
        </form>
      </div>

      {/* Bottom Half: Existing Students */}
      <div className="register-bottom">
        <h3>Existing Students</h3>
        {students.length === 0 ? (
          <p>No students registered yet.</p>
        ) : (
          <ul className="dashboard-section">
            {students.map((s, i) => (
              <li key={i} className="dashboard-card">
                <h4>{s.name}</h4>
                <p>{s.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RegisterStudent;
