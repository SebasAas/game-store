import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: fixed;
  backdrop-filter: blur(4px);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.06) 100%);
`;

export const NavLink = styled(Link)`
  font-family: 'Spartan', sans-serif;
  font-size: 12px;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;