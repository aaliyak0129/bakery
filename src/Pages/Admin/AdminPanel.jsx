import React, { useEffect, useState } from 'react';

const AdminPanel = () => {
  const [adminInfo, setAdminInfo] = useState({ email: '', password: '' });

  useEffect(() => {
    const storedInfo = JSON.parse(localStorage.getItem('adminInfo'));
    if (storedInfo) {
      setAdminInfo(storedInfo);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Admin Panel</h2>

      <table
        style={{
          margin: '30px auto',
          borderCollapse: 'collapse',
          width: '400px',
          fontFamily: 'Arial, sans-serif',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        }}
        border="1"
      >
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={{ padding: '10px' }}>Email</th>
            <th style={{ padding: '10px' }}>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>{adminInfo.email}</td>
            <td style={{ padding: '10px' }}>{adminInfo.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
