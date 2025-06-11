import React, { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", role: "customer" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "admin" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "customer" },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User Management</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.role}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                {/* You can add Edit button here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
