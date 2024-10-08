import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ComplaintsPage from './components/ComplaintPage'
import styled from 'styled-components';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import LoginPage from './components/LoginPage';
import "./App.css"
const Navbar = styled.nav`
  width: 100%;
  background-color: #2f6d31;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  box-sizing: border-box;
`;

function App() {
  const [username, setUsername] = useState(null);
  const [complaints, setComplaints] = useState([]);

  const addComplaint = (complaint) => {
    setComplaints([...complaints, complaint]);
    Swal.fire({
      title: "ร้องเรียนสำเร็จ!",
      text: "ทางเราจะรีบดำเนินการร้องเรียนของคุณโดยเร็วที่สุด!",
      icon: "success"
    });
  };

  const handleLogin = (username) => {
    setUsername(username);
  };

  return (
    <Router>
      <AppContainer>
        <Navbar>
          <div className='nav-div'>
            <div>
               {username && <NavLink to="/">หน้าหลัก (ยินดีต้อนรับ : {username})</NavLink>}
            <NavLink to="/complaints">การร้องเรียนทั้งหมด (officer)</NavLink>
            </div>
           <div>
           </div>
          </div>
        </Navbar>
        <Content>
          <Routes>
            {!username ? (
              <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            ) : (
              <>
                <Route path="/" element={<HomePage username={username} addComplaint={addComplaint} />} />
                <Route path="/complaints" element={<ComplaintsPage complaints={complaints} />} />
              
              </>
            )}
          </Routes>
        </Content>
      </AppContainer>
    </Router>
  );
}

export default App;