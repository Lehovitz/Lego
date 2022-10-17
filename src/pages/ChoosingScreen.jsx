import { useState } from "react";
import {
  StyledH1,
  StyledButton,
  StyledFigureCard,
  StyledContainer,
  StyledPicture,
  StyledHeader,
  StyledAnchor,
} from "../components/SharedComponents";
const NEXT_PAGE_NUMBER = 2;

export default function ChoosingScreen({
  handlePageChange,
  figures,
  handleSetFigureToShip,
}) {
  const [selectedFigure, setSelectedFigure] = useState(null);

  return (
    <>
      <StyledH1>CHOOSE YOUR MINIFIG</StyledH1>
      <StyledContainer>
        {figures.map((item, idx) => (
          <StyledFigureCard
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
          </StyledFigureCard>
        ))}
      </StyledContainer>
      <StyledButton
        disabled={!selectedFigure}
        onClick={() => {
          handlePageChange(NEXT_PAGE_NUMBER);
          handleSetFigureToShip(
            figures.find((item) => item.name === selectedFigure)
          );
        }}
      >
        PROCEED TO SHIPMENT
      </StyledButton>
    </>
  );
}
