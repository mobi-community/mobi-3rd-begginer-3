import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;

export const InputTitle = styled.span`
  width: 150px;
  text-align: start;
  font-weight: bold;
`;

export const ErrorText = styled.div`
  text-align: end;
  margin-left: 150px;
  color: red;
  font-size: 12px;
  font-weight: 600;
`;
