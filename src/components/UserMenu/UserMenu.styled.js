import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  flex-direction: row;

  & p {
    padding: 5px 10px;
    min-height: 36px;
  }

  & button {
    margin-left: 10px;
    padding: 6px 14px;
    min-height: 36px;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: all 0.4s ease-in-out;
    scale: 1;
    background-color: #ffffff;
    color: orange;

    &:hover {
      background-color: orange;
      color: #000;
      scale: 1.1;
    }
    &:active {
      scale: 0.9;
    }
  }
`;
