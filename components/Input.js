import { styled } from "styled-components"


const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }
`;

export default function Input (props){
    return < StyledInput {...props} />
}