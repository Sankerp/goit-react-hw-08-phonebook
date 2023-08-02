import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  padding: 6px 14px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  color: orange;

  &.active {
    background-color: orange;
    color: #000;
  }
  &:hover {
    scale: 1.05;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledUser = styled.div`
  display: flex;
  justify-content: end;
`;
