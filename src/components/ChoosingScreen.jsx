import { useState } from "react";
import styled from "styled-components";
import { StyledH1, StyledButton } from "../components/SharedComponents";
const NEXTPAGENUMBER = 2;

const StyledCards = styled.div`
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
  transition: box-shadow 0.3s;
  transition: border 0.3s;
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

  @media (max-width: 900px) {
    width: 230px;
  }
`;

const StyledPicture = styled.img`
  margin-bottom: 64px;
  max-height: 256px;
`;

const StyledHeader = styled.h2`
  font-family: "Black Han Sans", sans-serif;
`;

const StyledAnchor = styled.h2`
  font-family: "Black Han Sans", sans-serif;
  color: orange;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 48px;
  flex-wrap: wrap;
`;

export default function ChoosingScreen({
  handlePageChange,
  figures,
  handleSetFigureToShip,
}) {
  const [selectedFigure, setSelectedFigure] = useState(null);

  return (
    <div>
      <StyledH1>CHOOSE YOUR MINIFIG</StyledH1>
      <StyledContainer>
        {figures.map((item, idx) => (
          <StyledCards
            key={"card" + idx}
            selected={item.name === selectedFigure}
            onClick={() => {
              if (selectedFigure === item.name) {
                setSelectedFigure(null);
                return;
              }
              setSelectedFigure(item.name);
            }}
          >
            <StyledPicture
              key={"img" + idx}
              src={item?.set_img_url}
              alt="Error occured during loading the picture"
            />
            <StyledHeader key={"header" + idx}>{item.name}</StyledHeader>
            <StyledAnchor
              key={"anchor" + idx}
              onClick={(event) => {
                event.stopPropagation();
                window.open(item.set_url, "_blank").focus();
              }}
            >
              Show details
            </StyledAnchor>
          </StyledCards>
        ))}
      </StyledContainer>
      <StyledButton
        disabled={!selectedFigure}
        onClick={() => {
          handlePageChange(NEXTPAGENUMBER);
          handleSetFigureToShip(
            figures.find((item) => item.name === selectedFigure)
          );
        }}
      >
        PROCEED TO SHIPMENT
      </StyledButton>
    </div>
  );
}
