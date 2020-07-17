import React, { useEffect } from "react";
const App = () => {
  const [staff, setstaff] = React.useState([]);
  const [student, setstudent] = React.useState([]);
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [staff1, setStaff1] = React.useState("");
  const Callme = () => {
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
  };
  useEffect(() => {
    Callme();
  }, []);
  console.log(student);
  console.log(name, email, id, staff1);

  function display_for_students() {
    console.log(name, email, id, staff1);
    fetch("http://localhost:5000/studentDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, id, staff1 }),
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setId("");
        setEmail("");
        setStaff1("");
        Callme();
      });
  }

  function edit_student(data) {
    setName(data.name);
    setId(data.id);
    setEmail(data.email);
    setStaff1(data.staff1);
  }

  function delete_student(data) {
    console.log("hii", data);
    fetch("http://localhost:5000/student_delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        Callme();
        console.log("hii i am deleted");
      });
  }

  function updated_student() {
    fetch("http://localhost:5000/student_update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, id, staff1, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setId("");
        setEmail("");
        setStaff1("");
        Callme();
      });
  }
  // staff details
  function display_for_staff() {
    console.log(name, email, id, staff1);
    fetch("http://localhost:5000/staffDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, id, staff1 }),
    })
      .then((response) => response.json)
      .then((data) => {
        setName("");
        setId("");
        setEmail("");
        setStaff1("");
        Callme();
      });
  }

  function edit_staff(data) {
    setName(data.name);
    setId(data.id);
    setStaff1(data.staff1);
    setEmail(data.email);
  }

  function delete_staff(data) {
    console.log("hii", data);
    fetch("http://localhost:5000/staff_delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        Callme();
        console.log("hii i am deleted");
      });
  }

  function updated_staff() {
    fetch("http://localhost:5000/staff_update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, id, staff1, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setId("");
        setEmail("");
        setStaff1("");
        Callme();
      });
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
      <br></br>
      <label>enter the id </label>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <br></br>
      <label>enter the email</label>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br></br>
      <label>enter the staffid</label>
      <input
        type="text"
        value={staff1}
        onChange={(event) => setStaff1(event.target.value)}
      />
      <br></br>
      <h2>create a new student details</h2>

      <button onClick={() => display_for_students()}>Add me</button>
      <button onClick={() => updated_student()}>update</button>

      <h2>create a new staff details</h2>
      <button onClick={() => display_for_staff()}>Add me</button>
      <button onClick={() => updated_staff()}>update</button>

      <h2>staff details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>StudentCount</th>
            <th>E-mail</th>
            <th>ACTIONS TO BE TAKEN</th>
          </tr>
        </thead>

        <tbody>
          {staff.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.id}</td>
              <td>{data.studentCount}</td>
              <td>{data.email}</td>
              <td>
                <button onClick={() => edit_staff(data)}>edit</button>
                <button onClick={() => delete_staff(data)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>student details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Staff-Id</th>
            <th>E-mail</th>
            <th>ACTIONS TO BE TAKEN</th>
          </tr>
        </thead>

        <tbody>
          {student.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.id}</td>
              <td>{data.staffid}</td>
              <td>{data.email}</td>
              <td>
                <button onClick={() => edit_student(data)}>edit</button>
                <button onClick={() => delete_student(data)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
