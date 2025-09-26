import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/LabTestPage.css";

function LabTestPage() {
  const location = useLocation();
  const { test } = location.state || {};

  const [aim, setAim] = useState("");
  const [background, setBackground] = useState("");
  const [algorithm, setAlgorithm] = useState("");
  const [codeOrCalculations, setCodeOrCalculations] = useState("");
  const [results, setResults] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const submission = {
      testTitle: test.title,
      aim,
      background,
      algorithm,
      codeOrCalculations,
      results,
    };
    console.log("Lab Submission:", submission);
    alert("Lab submitted successfully!");
  };

  if (!test) return <p>No test selected.</p>;

  return (
    <div className="labtest-container">
      <h2>{test.title}</h2>
      <p>{test.description}</p>

      <form className="labtest-form" onSubmit={handleSubmit}>
        <label>
          Aim:
          <textarea
            value={aim}
            onChange={(e) => setAim(e.target.value)}
            placeholder="Enter the aim of the experiment"
            required
          />
        </label>

        <label>
          Background / Theory:
          <textarea
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            placeholder="Provide background or theory"
            required
          />
        </label>

        <label>
          Algorithm / Steps:
          <textarea
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            placeholder="Write the algorithm or steps"
            required
          />
        </label>

        <label>
          Coding / Calculations (if applicable):
          <textarea
            value={codeOrCalculations}
            onChange={(e) => setCodeOrCalculations(e.target.value)}
            placeholder="Enter code or calculations"
          />
        </label>

        <label>
          Results / Observations:
          <textarea
            value={results}
            onChange={(e) => setResults(e.target.value)}
            placeholder="Enter results or observations"
            required
          />
        </label>

        <button type="submit">Submit Lab</button>
      </form>
    </div>
  );
}

export default LabTestPage;
