import React from 'react';
import ComplaintList from '../components/ComplaintList';

function ComplaintsPage({ complaints }) {
  return (
    <div>
      <h1>Submitted Complaints</h1>
      <ComplaintList complaints={complaints} />
    </div>
  );
}

export default ComplaintsPage;
