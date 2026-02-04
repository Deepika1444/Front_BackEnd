import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="mb-3">User List</h3>

      <Table
        bordered={false}
        hover
        className="horizontal-table"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (     // .map() loops through the array
            <tr
              key={user.id}
              className="clickable-row"
              onClick={() => navigate(`/user/${user.id}`)}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company?.name}</td>
              <td>{user.address?.geo?.lat}</td>
              <td>{user.address?.geo?.lng}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersTable;
