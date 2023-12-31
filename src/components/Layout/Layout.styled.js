import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  padding: 10px 0 10px 48px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
    0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  & nav {
    display: flex;
    gap: 15px;
    text-decoration: none;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 6px 14px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &.active {
    background-color: red;
    color: #ccc;
  }
  &:hover {
    scale: 1.1;
    color: white;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
