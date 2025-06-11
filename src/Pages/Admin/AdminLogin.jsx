import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Predefined credentials
    const predefinedEmail = 'admin@gmail.com';
    const predefinedPassword = 'admin123';

    if (email === predefinedEmail && password === predefinedPassword) {
      localStorage.setItem('adminInfo', JSON.stringify({ email, password }));

        navigate('/admin/panel');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div style={{ width: '300px', margin: '100px auto' }}>
      <h3>Admin Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default AdminLogin;
