import React from 'react';
import ComplaintForm from './components/ComplaintForm';

function HomePage({ addComplaint }) {
  return (
    <div>
      <h1>ศูนย์กีฬาบางมด</h1>
      <ComplaintForm addComplaint={addComplaint} />
    </div>
  );
}

export default HomePage;
