import { useFormik } from "formik";
import styled from "styled-components";
import ShippingForm from "./ShippingForm";
import * as Yup from "yup";
import { useCallback } from "react";
import { StyledButton } from "./SharedComponents";
import { numbersOnlyRegExp, phoneRegExp } from "../constants/regex";
import { RED_CROSS_ICON } from "../constants/links";
import { postShippingFormData } from "../services/figures";
//TODO:: ekstrakcja komponentów, zmiana nazw niektórych styled, sprawdzić kolejny raz czy wszystko działa i deploy
const NEXT_PAGE_NUMBER = 0;
const StyledCard = styled.div`
  background: white;
  height: 1160px;
  width: 384px;
  border-radius: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;
  padding: 32px;
  overflow: auto;
  position: relative;
`;

const StyledPartPicture = styled.img`
  margin-bottom: 8px;
  max-height: 80px;
`;

const StyledFigurePicture = styled.img`
  align-self: center;
  justify-self: flex-end;
  max-height: 192px;
`;

const StyledMinorHeader = styled.h2`
  font-family: "Black Han Sans", sans-serif;
  margin-bottom: 32px;
`;

const StyledPartNameDiv = styled.div`
  font-size: 20px;
  text-align: left;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  min-width: 0;
  width: 256px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bolder;
`;

const StyledPartNumDiv = styled.div`
  font-size: 16px;
  color: orange;
  text-align: left;
  font-weight: bolder;
`;

const StyledPartContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  height: 128px;
`;

const StyledMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 160px;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledPartTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledMainHeader = styled.h1`
  text-align: left;
  font-size: 48px;
  line-height: 1.1;
  font-family: "Black Han Sans", sans-serif;
  color: white;
`;

const StyledContainerForHeaderAndForm = styled.div`
  display: "flex";
  justify-content: flex-start;
`;

const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(35, "Name seems to be too long.")
    .required("Required"),
  lastName: Yup.string()
    .max(35, "Name seems to be too long.")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  dateOfBirth: Yup.date()
    .max(new Date(), "You couldn't be born in the future.")
    .required("Required"),
  address: Yup.string()
    .min(3, "Address seem to be too short.")
    .required("Required"),
  city: Yup.string()
    .max(85, "A city with such a long name does not exist in the whole world.")
    .required("Required"),
  state: Yup.string()
    .min(4, "There is no state with such a short name.")
    .max(50, "State with such a long name does not exist.")
    .required("Required"),
  zipCode: Yup.string()
    .min(5, "Zip code must be exactly 5 digits.")
    .max(5, "Zip code must be exactly 5 digits.")
    .matches(numbersOnlyRegExp, "Zip code must contain digits only.")
    .required("Required"),
});

export default function ShippingScreen({
  figureToShip,
  figureToShipParts,
  handlePageChange,
}) {
  const onSubmit = useCallback(() => {
    const personalData = formik.values;
    const partsData = figureToShipParts.map((part) => ({
      partName: part.name,
      partUrl: part.part_url,
      partNumber: part.part_num,
      partId: part.part_cat_id,
      printOf: part.print_of,
    }));
    const figuresData = {
      name: figureToShip.name,
      setNumber: figureToShip.set_num,
      setUrl: figureToShip.set_url,
      isNumberOfPartsValid: figureToShipParts.length === figureToShip.num_parts,
      parts: partsData,
    };
    const data = {
      personalData: personalData,
      figuresData: figuresData,
    };
    postShippingFormData(data);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      dateOfBirth: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
    validationSchema: signupSchema,
    onSubmit: onSubmit,
  });

  return (
    <>
      <StyledMainContainer>
        <StyledContainerForHeaderAndForm>
          <StyledMainHeader>SHIPPING DETAILS</StyledMainHeader>
          <ShippingForm formik={formik}></ShippingForm>
        </StyledContainerForHeaderAndForm>
        <StyledCard>
          <StyledMinorHeader>SUMMARY</StyledMinorHeader>
          <StyledFigurePicture
            src={figureToShip.set_img_url}
          ></StyledFigurePicture>
          <StyledMinorHeader>{figureToShip.name}</StyledMinorHeader>
          {figureToShipParts.map((part, idx) => (
            <StyledPartContainer key={`container${idx}`}>
              <StyledPartPicture
                key={`img${idx}`}
                src={part.part_img_url ?? RED_CROSS_ICON}
              ></StyledPartPicture>
              <StyledPartTextContainer>
                <StyledPartNameDiv>{part.name}</StyledPartNameDiv>
                <StyledPartNumDiv>{part.part_num}</StyledPartNumDiv>
              </StyledPartTextContainer>
            </StyledPartContainer>
          ))}
          <StyledButton
            type="submit"
            disabled={!!Object.values(formik.errors).length || !formik.dirty}
            onClick={() => {
              formik.handleSubmit();
              handlePageChange(NEXT_PAGE_NUMBER);
            }}
          >
            SUBMIT
          </StyledButton>
        </StyledCard>
      </StyledMainContainer>
    </>
  );
}
