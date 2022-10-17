import { useFormik } from "formik";
import * as Yup from "yup";
import { useCallback } from "react";
import {
  StyledButton,
  StyledCard,
  StyledContainerForHeaderAndForm,
  StyledFigurePicture,
  StyledMainContainer,
  StyledMainHeader,
  StyledMinorHeader,
  StyledPartContainer,
  StyledPartNameDiv,
  StyledPartPicture,
  StyledPartTextContainer,
  StyledPartNumDiv,
} from "../components/SharedComponents";
import ShippingForm from "../components/ShippingForm";
import { numbersOnlyRegExp, phoneRegExp } from "../constants/regex";
import { RED_CROSS_ICON } from "../constants/links";
import { postShippingFormData } from "../services/figures";
const NEXT_PAGE_NUMBER = 0;

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
