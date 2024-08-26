import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ComplaintItem = styled.div`
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ComplaintTitle = styled.h3`
  color: #2f6d31;
  font-size: 1.4rem;
`;

function ComplaintList({ complaints }) {
  return (
    <ListContainer>
      <h2 style={{ color: '#2f6d31', fontSize: '1.8rem' }}>เรื่องร้องเรียนทั้งหมด</h2>
      {complaints.length === 0 ? (
        <p style={{ fontSize: '1.2rem' }}>ยังไม่มีข้อมูลการร้องเรียน</p>
      ) : (
        complaints.map((complaint, index) => (
          <ComplaintItem key={index}>
            <ComplaintTitle>สถานที่📌: {complaint.place}</ComplaintTitle>
            <ComplaintTitle>ผู้ร้องเรียน : {complaint.name}</ComplaintTitle>
            <p style={{ fontSize: '1.2rem' }}>{complaint.complaint}</p>
          </ComplaintItem>
        ))
      )}
    </ListContainer>
  );
}

export default ComplaintList;
