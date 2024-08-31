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

const RadioGroup = styled.div`
  margin-bottom: 12px;
`;

const RadioLabel = styled.label`
  font-size: 1.1rem;
  margin-right: 20px;
  cursor: pointer;
`;

function ComplaintForm({ addComplaint }) {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');
  const [place, setPlace] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onloadend = () => {
      const complaintData = {
        name: isAnonymous ? 'Anonymous' : name,
        complaint,
        place, // ส่งข้อมูล place ไปด้วย
        image: reader.result 
      };

      addComplaint(complaintData);
    };

    if (image) {
      reader.readAsDataURL(image);
    } else {
      const complaintData = {
        name: isAnonymous ? 'Anonymous' : name,
        complaint,
        place, // ส่งข้อมูล place ไปด้วย
        image: null
      };
      addComplaint(complaintData);
    }

    setPlace('');
    setName('');
    setComplaint('');
    setIsAnonymous(false);
    setImage(null);
  };

  return (
    <FormContainer>
      <h2 style={{ color: '#2f6d31', fontSize: '1.8rem' }}>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              value="named"
              checked={!isAnonymous}
              onChange={() => setIsAnonymous(false)}
            />
            ใส่ชื่อผู้ร้องเรียน
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              value="anonymous"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(true)}
            />
            ไม่ประสงค์ใส่ชื่อ
          </RadioLabel>
        </RadioGroup>
        {!isAnonymous && (
          <Input
            type="text"
            placeholder="ชื่อของคุณ"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="text"
          placeholder="บริเวณที่ต้องการร้องเรียน"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <Textarea
          rows="4"
          placeholder="คำร้องเรียนของคุณ"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
}

export default ComplaintForm;
