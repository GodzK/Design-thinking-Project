import React, { useState } from 'react';
import styled from 'styled-components';
import trash from "../assets/trash.jpg";
import road from "../assets/road.jpg";
import as from "../assets/9oykf2.jpg";

const ListContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ComplaintItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
  background-color: ${({ isTopComplaint }) => (isTopComplaint ? '#ffe6e6' : '#ffffff')};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
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
  max-width: 30%;
  max-height: 300px;
  margin-top: 10px;
  border-radius: 8px;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

function ComplaintList({ complaints }) {
  const topComplaints = [
    {
      place: "เเถวทางวิ่งสาธารณะ",
      name: "คุณสมชาย",
      complaint: "มีขยะทิ้งไม่เป็นที่ และส่งกลิ่นเหม็น",
      likes: 3000,
      image: trash,
    },
    {
      place: "รอบๆสวนสาธารณะ",
      name: "คุณวิไล",
      complaint: "เสียงดังจากการก่อสร้างทั้งวันทั้งคืน",
      likes: 1728,
      image: road,
    },
    {
      place: "สถาที่ออกกำลังกาย",
      name: "คุณประวิทย์",
      complaint: "เครื่องพัง รีบซ่อมด่วน",
      likes: 1236,
      image: as,
    },
  ];

  const allComplaints = [...topComplaints, ...complaints];

  const initialLikeCounts = allComplaints.map((complaint) => complaint.likes || 0);
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
      <h2 style={{ color: '#2f6d31', fontSize: '1.8rem' }}>สีเเดง:Top Comment</h2>
      {allComplaints.length === 0 ? (
        <p style={{ fontSize: '1.2rem' }}>ยังไม่มีข้อมูลการร้องเรียน</p>
      ) : (
        allComplaints.map((complaint, index) => (
          <ComplaintItem
            key={index}
            isTopComplaint={index < 3}
          >
            {complaint.image && (
              <ImageContainer isTopComplaint={index < 3}>
                <ImagePreview src={complaint.image} alt="Complaint Visual Evidence" />
              </ImageContainer>
            )}
            <div>
              <ComplaintTitle>👤 ผู้ร้องเรียน : {complaint.name}</ComplaintTitle>
              <ComplaintTitle>📌 สถานที่: {complaint.place}</ComplaintTitle>
              <p style={{ fontSize: '1.2rem' }}>{complaint.complaint}</p>
              <div>
                <LikeButton onClick={() => handleLikeToggle(index)}>
                  {liked[index] ? "Unlike" : "Like"}
                  <LikesCount>{likeCounts[index]}</LikesCount>
                </LikeButton>
              </div>
            </div>
          </ComplaintItem>
        ))
      )}
    </ListContainer>
  );
}

export default ComplaintList;