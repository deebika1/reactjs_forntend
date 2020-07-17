import React, { useEffect } from "react";
const Webpage = () => {
  const [staff, setstaff] = React.useState([]);
  const [student, setstudent] = React.useState([]);
  const [name, setname] = React.useState("");
  const [id, setid] = React.useState("");
  const [staffid, setstaffid] = React.useState("");
  const [email, setemail] = React.useState("");
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
  function add() {
    fetch("http://localhost:5000/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, id, staffid, email }),
    });
    console.log({ name, id, staffid, email });
    setname("");
    setstaffid("");
    setid("");
    setemail("");
  }
  //  function delete(){
  //    fetch("http://localhost:5000/student",{
  //      method:"DELETE",
  //      headers:{
  //        "Content":"application/json"
  //      },
  //      body:JSON.stringify({
  //        name:
  //      })
  //    })
  //  }

  console.log(student);

  return (
    <div>
      <h1>Staff Students Details</h1>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      ></input>
      <br />
      <label>Id</label>
      <input
        type="text"
        value={id}
        onChange={(e) => setid(e.target.value)}
      ></input>
      <br />
      <label>Staff-Id</label>
      <input
        type="text"
        value={staffid}
        onChange={(e) => setstaffid(e.target.value)}
      ></input>
      <br />
      <label>E-mail</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      <br />
      <button onClick={() => add()}>Addme</button>
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
      <br />
      <br />
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
export default Webpage;