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
  transition: box-shadow 0.2s ease-in;

  ${({ disabled }) =>
    !disabled &&
    `:hover {
    box-shadow: 0 0 50px #3388ff;
  }`}
  cursor: pointer;
  font-family: "Black Han Sans", sans-serif;
  color: white;
  min-width: 256px;
  min-height: 64px;
  border-radius: 10px;
  padding: 8px 24px;
  font-size: 20px;
`;

export const StyledFigureCard = styled.div`
  background: white;
  height: 576px;
  width: 384px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 32px;
  padding: 0 32px;
  transition: all 0.3s ease-in;
  border: ${({ selected }) =>
    selected ? "20px solid white" : "1px solid white"};
  ${({ selected }) =>
    !selected &&
    `&:hover {
  box-shadow: 0 0 50px #3388ff;
}`}
  box-shadow: ${({ selected }) =>
    selected ? "0px 0px 60px 10px rgba(255, 152, 0, 0.99)" : 0};
  cursor: pointer;
  position: relative;

  @media (max-width: 1560px) {
    width: 320px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledPicture = styled.img`
  margin-bottom: 64px;
  max-height: 256px;
`;

export const StyledHeader = styled.h2`
  font-family: "Black Han Sans", sans-serif;
`;

export const StyledAnchor = styled.h2`
  font-family: "Black Han Sans", sans-serif;
  color: orange;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 48px;
  flex-wrap: wrap;
`;

export const StyledShippingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 1250px;
  margin: auto;

  @media (max-width: 1400px) {
    width: 800px;
  }

  @media (max-width: 900px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const StyledDoubleTextFieldRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
`;

export const StyledTextField = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border-color: ${({ error }) => (error ? "red" : "white")};
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  font-weight: 600;
  padding: 4px;
  background-color: white;
  :focus {
    outline: none;
    box-shadow: 0 0 20px #3388ff;
  }
`;

export const StyledInputLabel = styled.label`
  color: white;
`;

export const StyledInputError = styled.div`
  color: red;
  height: 18px;
  font-size: 14px;
  font-weight: 550;
  align-self: flex-start;
`;

export const StyledSpacer = styled.div`
  height: 18px;
`;

export const SummaryCard = styled.div`
  background: white;
  height: 1160px;
  width: 384px;
  border-radius: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;
  padding: 32px;
  position: relative;
  overflow: hidden;
  margin: auto;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledPartPicture = styled.img`
  margin-bottom: 8px;
  max-height: 80px;
`;

export const StyledFigurePicture = styled.img`
  align-self: center;
  justify-self: flex-end;
  max-height: 192px;
`;

export const StyledMinorHeader = styled.h2`
  font-family: "Black Han Sans", sans-serif;
  margin-bottom: 32px;
`;

export const StyledPartNameDiv = styled.div`
  font-size: 20px;
  text-align: left;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  min-width: 0;
  width: 256px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bolder;

  @media (max-width: 500px) {
    width: 128px;
  }
`;

export const StyledPartNumDiv = styled.div`
  font-size: 16px;
  color: orange;
  text-align: left;
  font-weight: bolder;
`;

export const StyledPartContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  height: 128px;
`;

export const StyledMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 160px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 900px) {
    gap: 80px;
  }

  @media (max-width: 900px) {
    gap: 54px;
  }
`;

export const StyledPartTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledMainHeader = styled.h1`
  text-align: left;
  font-size: 48px;
  line-height: 1.1;
  font-family: "Black Han Sans", sans-serif;
  color: white;
`;

export const StyledContainerForHeaderAndForm = styled.div`
  display: "flex";
  justify-content: center;
  align-items: center;
`;
