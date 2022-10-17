import {
  StyledDoubleTextFieldRow,
  StyledInputError,
  StyledInputLabel,
  StyledShippingForm,
  StyledSpacer,
  StyledTextField,
  StyledTextFieldContainer,
} from "./SharedComponents";

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
