import styled from 'styled-components'

export const Button = styled.button`
  flex: 1 1 auto;
  box-sizing: border-box;
  margin: 5px;
  position: relative;
  padding: 10px 15px;
  background-color: ${props => props.disabled ? '#ccc' : '#008855'};
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 0 ${props => props.disabled ? '#aaa' : '#007755'};

  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : '#008855'};
  }

  &:active {
    top: ${props => props.disabled ? '0px' : '2px'};
    box-shadow: ${props => props.disabled ? '0 4px 0 #aaa' : '0 2px 0 #005533'};
  }
`;

export const FinishButton = styled.button`
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0 10px 0;
  padding: 12px 15px;
  background-color: #005588;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 8px 0 #004477;

  &:hover {
    background-color: #005588;
  }

  &:active {
    top: 6px;
    box-shadow: 0 2px 0 #002244;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Button;