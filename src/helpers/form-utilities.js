export const validateLoginFormValues = (formValues) => {
  const errors = {};

  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!formValues.email) {
    errors.email = "Email required";
  } else if (!emailPattern.test(formValues.email)) {
    errors.email = "Invalid email format";
  }

  if (!formValues.password) {
    errors.password = "Password required";
  } else if (formValues.password.length < 6) {
    errors.password = "Password must be 6 characters long";
  }

  return errors;
};
