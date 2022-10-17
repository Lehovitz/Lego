import styled from "styled-components";

const StyledShippingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 1250px;

  @media (max-width: 1400px) {
    width: 800px;
  }

  @media (max-width: 900px) {
    width: 400px;
  }
`;

const StyledTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const StyledDoubleTextFieldRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
`;

const StyledTextField = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border-color: ${({ error }) => (error ? "red" : "white")};
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  font-weight: 600;
  padding: 4px;
`;

const StyledInputLabel = styled.label`
  color: white;
`;

const StyledInputError = styled.div`
  color: red;
  height: 18px;
  font-size: 14px;
  font-weight: 550;
  align-self: center;
`;

const StyledSpacer = styled.div`
  height: 18px;
`;

export default function ShippingForm({ formik }) {
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    formik;

  return (
    <StyledShippingForm onSubmit={handleSubmit}>
      <StyledDoubleTextFieldRow>
        <StyledTextFieldContainer>
          <StyledInputLabel htmlFor="firstName">First Name</StyledInputLabel>
          <StyledTextField
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && errors.firstName}
            value={values.firstName}
          />
          {touched.firstName && errors.firstName ? (
            <StyledInputError>{errors.firstName}</StyledInputError>
          ) : (
            <StyledSpacer />
          )}
        </StyledTextFieldContainer>
        <StyledTextFieldContainer>
          <StyledInputLabel htmlFor="lastName">Last Name</StyledInputLabel>
          <StyledTextField
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={values.lastName}
            onBlur={handleBlur}
            error={touched.lastName && errors.lastName}
          />
          {touched.lastName && errors.lastName ? (
            <StyledInputError>{errors.lastName}</StyledInputError>
          ) : (
            <StyledSpacer />
          )}
        </StyledTextFieldContainer>
      </StyledDoubleTextFieldRow>
      <StyledInputLabel htmlFor="phoneNumber">Phone number</StyledInputLabel>
      <StyledTextField
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        onChange={handleChange}
        value={values.phoneNumber}
        onBlur={handleBlur}
        error={touched.phoneNumber && errors.phoneNumber}
      />
      {touched.phoneNumber && errors.phoneNumber ? (
        <StyledInputError>{errors.phoneNumber}</StyledInputError>
      ) : (
        <StyledSpacer />
      )}
      <StyledInputLabel htmlFor="email">Email</StyledInputLabel>
      <StyledTextField
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
        error={touched.email && errors.email}
      />
      {touched.email && errors.email ? (
        <StyledInputError>{errors.email}</StyledInputError>
      ) : (
        <StyledSpacer />
      )}
      <StyledInputLabel htmlFor="dateOfBirth">Date of birth</StyledInputLabel>
      <StyledTextField
        id="dateOfBirth"
        name="dateOfBirth"
        type="date"
        onChange={handleChange}
        value={values.dateOfBirth}
        onBlur={handleBlur}
        error={touched.dateOfBirth && errors.dateOfBirth}
      />
      {touched.dateOfBirth && errors.dateOfBirth ? (
        <StyledInputError>{errors.dateOfBirth}</StyledInputError>
      ) : (
        <StyledSpacer />
      )}
      <StyledInputLabel htmlFor="adress">Address</StyledInputLabel>
      <StyledTextField
        id="address"
        name="address"
        type="text"
        onChange={handleChange}
        value={values.address}
        onBlur={handleBlur}
        error={touched.address && errors.address}
      />
      {touched.address && errors.address ? (
        <StyledInputError>{errors.address}</StyledInputError>
      ) : (
        <StyledSpacer />
      )}
      <StyledInputLabel htmlFor="city">City</StyledInputLabel>
      <StyledTextField
        id="city"
        name="city"
        type="text"
        onChange={handleChange}
        value={values.city}
        onBlur={handleBlur}
        error={touched.city && errors.city}
      />
      {touched.city && errors.city ? (
        <StyledInputError>{errors.city}</StyledInputError>
      ) : (
        <StyledSpacer />
      )}
      <StyledDoubleTextFieldRow>
        <StyledTextFieldContainer>
          <StyledInputLabel htmlFor="state">State</StyledInputLabel>
          <StyledTextField
            id="state"
            name="state"
            type="text"
            onChange={handleChange}
            value={values.state}
            onBlur={handleBlur}
            error={touched.state && errors.state}
          />
          {touched.state && errors.state ? (
            <StyledInputError>{errors.state}</StyledInputError>
          ) : (
            <StyledSpacer />
          )}
        </StyledTextFieldContainer>
        <StyledTextFieldContainer>
          <StyledInputLabel htmlFor="zipCode">Zip code</StyledInputLabel>
          <StyledTextField
            id="zipCode"
            name="zipCode"
            type="text"
            onChange={handleChange}
            value={values.zipCode}
            onBlur={handleBlur}
            error={touched.zipCode && errors.zipCode}
          />
          {touched.zipCode && errors.zipCode ? (
            <StyledInputError>{errors.zipCode}</StyledInputError>
          ) : (
            <StyledSpacer />
          )}
        </StyledTextFieldContainer>
      </StyledDoubleTextFieldRow>
    </StyledShippingForm>
  );
}
