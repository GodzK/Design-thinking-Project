import React from 'react';
import ComplaintList from '../components/ComplaintList';

function ComplaintsPage({ complaints }) {
  return (
    <div>
      <h1>กระดานการร้องเรียน</h1>
      <ComplaintList complaints={complaints} />
    </div>
  );
}

export default ComplaintsPage;
