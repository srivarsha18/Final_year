import React, { useState } from "react";
import "../styles/FacultyDashboard.css";

function CreateTest() {
  const steps = [
    "Fill basic details",
    "Choose stages",
    "Choose batch",
    "Generate questions",
    "Create test",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  // Step 1: Basic Details
  const [basicDetails, setBasicDetails] = useState({
    testName: "",
    subjectName: "",
    subjectCode: "",
    startDateTime: "",
    endDateTime: "",
  });

  // Step 2: Stages
  const [stages, setStages] = useState([
    { name: "Aim and Background Theory", duration: "20-30 mins" },
    { name: "Program", duration: "30-60 mins" },
    { name: "Execution", duration: "30-60 mins" },
    { name: "Viva and Result", duration: "20-30 mins" },
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [stageForm, setStageForm] = useState({ name: "", duration: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  // Step 3: Batch
  const allStudents = [
    { name: "Varsha K.V", email: "student@skct.edu.in", code: "MATH101" },
    { name: "Arun Kumar", email: "student2@skct.edu.in", code: "PHY101" },
    { name: "Sita R", email: "student3@skct.edu.in", code: "CHEM101" },
  ];
  const [students, setStudents] = useState(allStudents);
  const [filterCode, setFilterCode] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);

  // Step 4: Questions
  const [questionMode, setQuestionMode] = useState("manual");
  const [questions, setQuestions] = useState([""]);

  // Navigation
  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Step 1 Handlers
  const handleBasicChange = (e) => {
    const { name, value } = e.target;
    setBasicDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Step 2 Handlers
  const handleStageChange = (e) => {
    const { name, value } = e.target;
    setStageForm((prev) => ({ ...prev, [name]: value }));
  };
  const addStage = () => {
    if (!stageForm.name || !stageForm.duration) return;
    setStages((prev) => [...prev, stageForm]);
    setStageForm({ name: "", duration: "" });
    setIsAdding(false);
  };
  const editStage = () => {
    if (editingIndex === null) return;
    setStages((prev) =>
      prev.map((s, i) => (i === editingIndex ? stageForm : s))
    );
    setStageForm({ name: "", duration: "" });
    setIsEditing(false);
    setEditingIndex(null);
  };

  // Step 3 Handlers
  const handleFilterByCode = () => {
    const filtered = allStudents.filter(
      (s) => s.code.toLowerCase() === filterCode.toLowerCase()
    );
    setStudents(filtered);
  };
  const displayAllStudents = () => setStudents(allStudents);
  const selectFirst30 = () => setStudents(allStudents.slice(0, 30));
  const selectLast30 = () => setStudents(allStudents.slice(-30));
  const toggleStudentSelection = (email) => {
    if (selectedStudents.includes(email)) {
      setSelectedStudents((prev) => prev.filter((e) => e !== email));
    } else {
      setSelectedStudents((prev) => [...prev, email]);
    }
  };

  // Step 4 Handlers
  const handleModeChange = (e) => setQuestionMode(e.target.value);
  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };
  const addQuestion = () => setQuestions((prev) => [...prev, ""]);

  const renderStepContent = () => {
    if (currentStep === 0) {
      return (
        <form
          className="basic-details-form"
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          <div className="form-group">
            <label>Test Name:</label>
            <input
              type="text"
              name="testName"
              value={basicDetails.testName}
              onChange={handleBasicChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject Name:</label>
            <input
              type="text"
              name="subjectName"
              value={basicDetails.subjectName}
              onChange={handleBasicChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject Code:</label>
            <input
              type="text"
              name="subjectCode"
              value={basicDetails.subjectCode}
              onChange={handleBasicChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Date & Time:</label>
            <input
              type="datetime-local"
              name="startDateTime"
              value={basicDetails.startDateTime}
              onChange={handleBasicChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date & Time:</label>
            <input
              type="datetime-local"
              name="endDateTime"
              value={basicDetails.endDateTime}
              onChange={handleBasicChange}
              required
            />
          </div>
          <button type="submit">Save & Continue</button>
        </form>
      );
    } else if (currentStep === 1) {
      return (
        <div>
          <h4>Fixed Stages</h4>
          <ul className="dashboard-section">
            {stages.map((stage, index) => (
              <li key={index} className="dashboard-card">
                <h4>{stage.name}</h4>
                <p>Duration: {stage.duration}</p>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setIsAdding(true)}>Add Stage</button>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                setEditingIndex(0);
                setStageForm(stages[0]);
                setIsEditing(true);
              }}
            >
              Edit Stage
            </button>
          </div>
          {isAdding && (
            <div className="stage-form">
              <h4>Add Stage</h4>
              <div className="form-group">
                <label>Stage Name:</label>
                <input
                  type="text"
                  name="name"
                  value={stageForm.name}
                  onChange={handleStageChange}
                />
              </div>
              <div className="form-group">
                <label>Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={stageForm.duration}
                  onChange={handleStageChange}
                />
              </div>
              <button onClick={addStage}>Add Stage</button>
            </div>
          )}
          {isEditing && (
            <div className="stage-form">
              <h4>Edit Stage</h4>
              <div className="form-group">
                <label>Stage Name:</label>
                <input
                  type="text"
                  name="name"
                  value={stageForm.name}
                  onChange={handleStageChange}
                />
              </div>
              <div className="form-group">
                <label>Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={stageForm.duration}
                  onChange={handleStageChange}
                />
              </div>
              <button onClick={editStage}>Save Changes</button>
            </div>
          )}
        </div>
      );
    } else if (currentStep === 2) {
      return (
        <div>
          <h4>Choose Batch</h4>
          <div className="form-group">
            <label>Filter by Code:</label>
            <input
              type="text"
              value={filterCode}
              onChange={(e) => setFilterCode(e.target.value)}
            />
            <button onClick={handleFilterByCode}>Filter</button>
          </div>
          <button onClick={displayAllStudents}>Display All Students</button>
          <div style={{ marginTop: "10px" }}>
            <button onClick={selectFirst30}>Select First 30</button>
            <button onClick={selectLast30} style={{ marginLeft: "10px" }}>
              Select Last 30
            </button>
          </div>
          <ul className="dashboard-section" style={{ marginTop: "20px" }}>
            {students.map((s, i) => (
              <li key={i} className="dashboard-card">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(s.email)}
                    onChange={() => toggleStudentSelection(s.email)}
                  />
                  <div>
                    <h4>{s.name}</h4>
                    <p>{s.email}</p>
                    <p>Code: {s.code}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p>Selected Students: {selectedStudents.length}</p>
        </div>
      );
    } else if (currentStep === 3) {
      return (
        <div>
          <h4>Generate Questions</h4>
          <div>
            <label>
              <input
                type="radio"
                name="questionMode"
                value="ai"
                checked={questionMode === "ai"}
                onChange={handleModeChange}
              />{" "}
              AI Generated
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                name="questionMode"
                value="manual"
                checked={questionMode === "manual"}
                onChange={handleModeChange}
              />{" "}
              Manual
            </label>
          </div>
          <div style={{ marginTop: "15px" }}>
            {questions.map((q, index) => (
              <div key={index} className="form-group">
                <label>Question {index + 1}:</label>
                <input
                  type="text"
                  value={q}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                />
              </div>
            ))}
            <button onClick={addQuestion}>Add Question</button>
          </div>
        </div>
      );
    } else if (currentStep === 4) {
      return (
        <div>
          <h4>Review & Create Test</h4>
          <p><strong>Test Name:</strong> {basicDetails.testName}</p>
          <p><strong>Subject:</strong> {basicDetails.subjectName} ({basicDetails.subjectCode})</p>
          <p><strong>Duration:</strong> {basicDetails.startDateTime} to {basicDetails.endDateTime}</p>
          <p><strong>Stages:</strong></p>
          <ul>{stages.map((s, i) => <li key={i}>{s.name} - {s.duration}</li>)}</ul>
          <p><strong>Selected Students:</strong> {selectedStudents.length}</p>
          <p><strong>Questions ({questionMode}):</strong></p>
          <ul>{questions.map((q, i) => <li key={i}>{q}</li>)}</ul>
        </div>
      );
    }
  };

  return (
    <div className="create-test-page">
      <h3>Create New Test</h3>
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className="progress-step">
            <div className={`step-circle ${index <= currentStep ? "active" : ""}`}>
              {index + 1}
            </div>
            <div className="step-title">{step}</div>
            {index < steps.length - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>

      <div className="progress-buttons">
        <button onClick={prevStep} disabled={currentStep === 0}>Previous</button>
        {currentStep !== 0 && (
          <button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next</button>
        )}
      </div>

      <div className="step-content">{renderStepContent()}</div>

      {/* Create button at bottom */}
      <button
        className="create-test-btn"
        onClick={() => alert("Test Created!")}
      >
        Create
      </button>
    </div>
  );
}

export default CreateTest;
