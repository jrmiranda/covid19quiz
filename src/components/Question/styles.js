import styled from 'styled-components'

export const QuestionWrapper = styled.div`
  width: 480px;
`;

export const Question = styled.div`
  background-color: white;
  padding: 15px 15px 20px;
  border-radius: 8px;
  display: ${props => props.active ? 'block' : 'none'};
`;

export const QuestionHeader = styled.p`
  display: block;
  margin: 20px 0;
  padding: 0;
  font-size: 24px;
  text-align: center;
`;

export const QuestionStatus = styled.span`
  display: block;
  padding-bottom: 5px;
  font-size: 13px;
  font-weight: bold;
  color: rgba(0, 120, 50, 0.8);
  border-bottom: 1px solid #eee;
`;

export const Options = styled.div`
  margin: 20px 5px 0 5px;
`;

export const Option = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: ${props => props.selected ? '#0099ee' : '#eee'};
  color: ${props => props.selected ? 'white' : '#333'};
  border-radius: 5px;
  font-size: 18px;
  font-weight: normal;
  cursor: pointer;

  &:hover {
    background-color: #0099ee;
    color: white;
  }
`;