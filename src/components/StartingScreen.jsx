import { StyledButton, StyledH1 } from "./SharedComponents";

const NEXT_PAGE_NUMBER = 1;
export default function StartingScreen({ handlePageChange }) {
  return (
    <>
      <StyledH1>LEGO MINIFIGS MYSTERY BOX</StyledH1>
      <StyledButton onClick={() => handlePageChange(NEXT_PAGE_NUMBER)}>
        LET'S GO!
      </StyledButton>
    </>
  );
}
