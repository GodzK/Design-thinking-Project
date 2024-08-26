import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 12px;
  font-size: 1.1rem;
  border: 2px solid #2f6d31;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 14px;
  margin-bottom: 12px;
  font-size: 1.1rem;
  border: 2px solid #2f6d31;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 14px;
  width: 100%;
  font-size: 1.2rem;
  background-color: #2f6d31;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #256523;
  }
`;

function ComplaintForm({ addComplaint }) {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComplaint({ name, place ,complaint });
    setName('');
    setPlace('');
    setComplaint('');

  };

  return (
    <FormContainer>
      <h2 style={{ color: '#2f6d31', fontSize: '1.8rem' }}>กรอกข้อมูลของท่าน</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="ใส่ชื่อเเละนามสกุลของท่าน"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <Input
          type="text"
          placeholder="สถานที่&บริเวณที่คุณต้องการร้องเรียน"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <Textarea
          rows="4"
          placeholder="ใส่คำร้องเรียนของท่าน"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />
        <Button type="submit">ยืนยัน</Button>
      </form>
    </FormContainer>
  );
}

export default ComplaintForm;
