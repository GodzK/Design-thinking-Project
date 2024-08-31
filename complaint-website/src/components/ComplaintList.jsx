import React, { useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ComplaintItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  background-color: ${({ isTopComplaint }) => (isTopComplaint ? '#ffe6e6' : '#ffffff')};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ComplaintTitle = styled.h3`
  color: #2f6d31;
  font-size: 1.4rem;
`;

const LikeButton = styled.button`
  background-color: #2f6d31;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #256523;
  }
`;

const LikesCount = styled.span`
  margin-left: 10px;
  font-size: 1rem;
  color: #fff;
`;

const ImagePreview = styled.img`
  max-width: 40%;
  max-height: 300px;
  margin-top: 10px;
  border-radius: 8px;
  object-fit: cover;
`;

function ComplaintList({ complaints }) {
  const topComplaints = [
    {
      place: "เเถวทางวิ่งสาธารณะ",
      name: "คุณสมชาย",
      complaint: "มีขยะทิ้งไม่เป็นที่ และส่งกลิ่นเหม็น",
      likes: 3000,
    },
    {
      place: "รอบๆสวนสาธารณะ",
      name: "คุณวิไล",
      complaint: "เสียงดังจากการก่อสร้างทั้งวันทั้งคืน",
      likes: 1728,
    },
    {
      place: "บ่อปลา",
      name: "คุณประวิทย์",
      complaint: "น้ำไม่ไหลเป็นเวลา 3 วันแล้ว",
      likes: 1236,
    },
  ];

  const allComplaints = [...topComplaints, ...complaints];

  const initialLikeCounts = allComplaints.map((complaint, index) => complaint.likes || 0);
  const [likeCounts, setLikeCounts] = useState(initialLikeCounts);
  const [liked, setLiked] = useState(new Array(allComplaints.length).fill(false));

  const handleLikeToggle = (index) => {
    const newLikeCounts = [...likeCounts];
    const newLiked = [...liked];

    if (newLiked[index]) {
      newLikeCounts[index] -= 1;
    } else {
      newLikeCounts[index] += 1;
    }

    newLiked[index] = !newLiked[index];
    setLikeCounts(newLikeCounts);
    setLiked(newLiked);
  };

  return (
    <ListContainer>
      <h2 style={{ color: '#2f6d31', fontSize: '1.8rem' }}>เรื่องร้องเรียนทั้งหมด</h2>
      {allComplaints.length === 0 ? (
        <p style={{ fontSize: '1.2rem' }}>ยังไม่มีข้อมูลการร้องเรียน</p>
      ) : (
        allComplaints.map((complaint, index) => (
          <ComplaintItem
            key={index}
            isTopComplaint={index < 3}
          >
            <div>
              <ComplaintTitle>ผู้ร้องเรียน : {complaint.name}</ComplaintTitle>
              <ComplaintTitle>สถานที่: {complaint.place}</ComplaintTitle>
              <p style={{ fontSize: '1.2rem' }}>{complaint.complaint}</p>
              {complaint.image && <ImagePreview src={complaint.image} alt="Complaint Visual Evidence" />}
            </div>
            <div>
              <LikeButton onClick={() => handleLikeToggle(index)}>
                {liked[index] ? "Unlike" : "Like"}
                <LikesCount>{likeCounts[index]}</LikesCount>
              </LikeButton>
            </div>
          </ComplaintItem>
        ))
      )}
    </ListContainer>
  );
}

export default ComplaintList;