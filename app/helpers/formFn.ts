import { formData, User } from "./types";

export const validateField = (name: string, value: string, t): string => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(\+?\d{1,4}[-\s]?)?(\(?\d{2,4}\)?[-\s]?)?\d{6,10}$/;
  switch (name) {
    case "firstName":
      if (!value) return t("validations.firstNameRequired");
      if (value.length < 3) t("validations.firstNameTooShort");
      return "";
    case "lastName":
      if (!value) return t("validations.lastNameRequired");
      if (value.length < 3) return t("validations.lastNameTooShort");
      return "";
    case "phone":
      if (!value) return t("validations.phoneRequired");
      if (!phoneRegex.test(value)) return t("validations.phoneInvalid");
      return "";
    case "email":
      if (!value) return t("validations.emailRequired");
      if (!emailRegex.test(value)) return t("validations.emailInvalid");
      return "";
    default:
      return "";
  }
};

const generateTempId = () => `temp-${Date.now()}`;

export const createOptimisticUser = (formData: formData): User => {
  const tempId = generateTempId();
  return {
    id: tempId,
    FirstName: formData.firstName,
    LastName: formData.lastName,
    Phone: formData.phone,
    Email: formData.email,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
  };
};

export const updatedErrorsFn = (formData: formData, t) => {
  return {
    firstNameError: validateField("firstName", formData.firstName, t),
    lastNameError: validateField("lastName", formData.lastName, t),
    phoneError: validateField("phone", formData.phone, t),
    emailError: validateField("email", formData.email, t),
  };
};
