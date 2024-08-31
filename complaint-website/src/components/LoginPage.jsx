import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 2px solid #2f6d31;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 90%;
  padding: 14px;
  margin-bottom: 12px;
  font-size: 1.1rem;
  border: 2px solid #2f6d31;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 1.2rem;
  background-color: #2f6d31;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <LoginContainer>
      <h2 style={{ color: '#2f6d31', fontSize: '1.8rem' }}>ล็อกอิน</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="ใส่Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </LoginContainer>
  );
}

export default LoginPage;
