import React, { useEffect } from "react";
const App = () => {
  const [staff, setstaff] = React.useState([]);
  const [student, setstudent] = React.useState([]);
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [staff1, setStaff1] = React.useState("");
  useEffect(() => {
    //function componentDidMount() {
    fetch("http://localhost:5000/student")
      .then((response) => response.json())
      .then((data) => setstudent(data));
    console.log("student", student);
    //.then((data) => console.log("student", data));
    fetch("http://localhost:5000/staff")
      .then((response) => response.json())
      .then((data) => setstaff(data));
    console.log("staff", staff);
  });
  console.log(student);
  console.log(name, email, id, staff1);
  function display() {
    console.log(name, email, id, staff1);
    fetch("http://localhost:5000/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, id, staff1 }),
    });

    setName("");
    setId("");
    setEmail("");
    setStaff1("");
  }
  return (
    <div>
      <h1>Staff Students Details</h1>
      <label>enter the user name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>enter the id </label>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <label>enter the email</label>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>enter the staffid</label>
      <input
        type="text"
        value={staff1}
        onChange={(event) => setStaff1(event.target.value)}
      />
      <button onClick={() => display()}>click me</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>StudentCount</th>
            <th>E-mail</th>
          </tr>
        </thead>

        <tbody>
          {staff.map((a, index) => (
            <tr key={index}>
              <td>{a.name}</td>
              <td>{a.id}</td>
              <td>{a.studentCount}</td>
              <td>{a.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Staff-Id</th>
            <th>E-mail</th>
          </tr>
        </thead>

        <tbody>
          {student.map((a, index) => (
            <tr key={index}>
              <td>{a.name}</td>
              <td>{a.id}</td>
              <td>{a.staffid}</td>
              <td>{a.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
