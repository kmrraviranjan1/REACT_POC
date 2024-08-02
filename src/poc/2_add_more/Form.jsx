import { useState } from "react";
import "./form.css";
const Form = () => {
  const [rows, setRows] = useState([
    { marks: "", name: "" },
    { marks: "", name: "" },
    { marks: "", name: "" },
  ]);
  const [basic, setBasic] = useState({
    class: "",
    section: "",
    subject: "",
    totalMarks: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rows);
  };

  return (
    <div className="container">
      <p className="title">Class Report Card</p>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="class">
          Class
          <input type="text" placeholder="Class" name="class" />
        </label>
        <label htmlFor="section">
          Section
          <input type="text" placeholder="Section" name="section" />
        </label>
        <label htmlFor="subject">
          Subject
          <input type="text" placeholder="Subject" name="subject" />
        </label>
        <label htmlFor="totalMarks">
          Total Marks
          <input type="text" placeholder="Total Marks" name="totalMarks" />
        </label>
        <p>Marks Obtained</p>
        <div
          style={{
            display: "flex",
            alignItems: "end",
          }}
        >
          <div>
            {rows.map((row, index) => {
              return (
                <div key={index}>
                  <label htmlFor="studentName">
                    Student Name
                    <input
                      type="text"
                      placeholder="Student Name"
                      value={row.name}
                      onChange={(e) => {
                        const tempRows = [...rows];
                        tempRows[index].name = e.target.value;
                        setRows(tempRows);
                      }}
                    />
                  </label>
                  <label htmlFor="marksObtained">
                    Marks Obtained
                    <input
                      type="number"
                      placeholder="Student Marks"
                      value={row.marks}
                      onChange={(e) => {
                        const tempRows = [...rows];
                        tempRows[index].marks = e.target.value;
                        setRows(tempRows);
                      }}
                    />
                  </label>
                </div>
              );
            })}
          </div>
          <div>
            <button
              onClick={() =>
                setRows((prev) => [...prev, { marks: "", name: "" }])
              }
            >
              Add More Students
            </button>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
