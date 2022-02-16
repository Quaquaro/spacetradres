import { NavLink, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import UserStatusPage from './pages/UserStatusPage.js';

function App() {
  return (
    <div>
      <nav>
        <StyledLink to="/">User Status</StyledLink>
        <StyledLink to="/ships">Available ships</StyledLink>
        <StyledLink to="/market">Marketplace</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<UserStatusPage />} />
        <Route path="/ships" element={<div>Available ships</div>} />
        <Route path="/market" element={<div>Marketplace</div>} />
      </Routes>
    </div>
  );
}

const StyledLink = styled(NavLink)`
  margin: 8px;
  padding: 4px 12px;
  border-radius: 4px;
  text-decoration: none;
  background-color: darkslategray;
  color: azure;

  &.active {
    background-color: azure;
    color: darkslategray;
    border: 1px solid darkslategray;
  }
`;

export default App;
