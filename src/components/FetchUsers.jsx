import { useEffect, useState } from "react";

function FetchUsers() {
  // https://jsonplaceholder.typicode.com/users

  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((userData) => {
        setUsers(userData);
      });
  };

  useEffect(fetchUsers, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Username</th>
        </tr>
      </thead>
      <tbody>
        { users.map(user => (
            <tr key={user.id}>
                <td> {user.id}</td>
                <td> {user.name}</td>
                <td> {user.email}</td>
                <td> {user.phone}</td>
                <td> {user.username}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FetchUsers;
