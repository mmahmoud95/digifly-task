export type User = {
  Email: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  created_at: string;
  id: number | string;
  published_at: string;
  updated_at: string;
};

export type formData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type ErrorFormField = {
  firstNameError: string;
  lastNameError: string;
  phoneError: string;
  emailError: string;
};
