import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  font-family: "Black Han Sans", sans-serif;
  color: white;
`;

export const StyledButton = styled.button`
  align-self: center;
  margin-top: auto;
  background-color: ${({ disabled }) => (disabled ? "#D3D3D3" : "#0066FF")};
  border: ${({ disabled }) => (disabled ? "#D3D3D3" : "#0066FF")};
  transition: box-shadow 0.3s;
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
    box-shadow: 0 0 50px #3388ff;
  }`}
  cursor: pointer;
  font-family: "Black Han Sans", sans-serif;
  color: white;
  min-width: 256px;
  border-radius: 10px;
  padding: 8px 24px;
  font-size: 20px;
`;
