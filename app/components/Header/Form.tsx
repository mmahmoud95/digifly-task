"use client";
import React, { useState } from "react";
import SubmitBtn from "../ui/SubmitBtn";
import { Input } from "../ui/Input";
import { userAdd } from "@/app/helpers/userAdd";
import { useDispatch } from "react-redux";
import {
  createOptimisticUser,
  updatedErrorsFn,
  validateField,
} from "@/app/helpers/formFn";
import { useTranslations } from "next-intl";
import { ErrorFormField, formData, User } from "@/app/helpers/types";
import { addUser, removeUser } from "@/app/lib/store/slices/userSlice";

const From: React.FC = () => {
  const t = useTranslations("part1.form");
  const dispatch = useDispatch();
  //////////////////////////////////
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorFormField>({
    firstNameError: "",
    lastNameError: "",
    phoneError: "",
    emailError: "",
  });
  /////////////////////////
  const [serverError, setServerError] = useState<string | null>(null);
  const [formData, setFormData] = useState<formData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  //////////////////////
  const [blurredFields, setBlurredFields] = useState<{
    firstName: boolean;
    lastName: boolean;
    phone: boolean;
    email: boolean;
  }>({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
  });

  // handle Change And track Inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Check validation values field after blur event not first onChange
    if (blurredFields[name as keyof typeof blurredFields]) {
      const error = validateField(name, value, t);
      setErrors((prev) => ({
        ...prev,
        [`${name}Error`]: error,
      }));
    }
  };

  // check if the field is blurred
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlurredFields((prev) => ({
      ...prev,
      [name]: true,
    }));
    /////////////////////////
    const error = validateField(name, value, t);
    setErrors((prev) => ({
      ...prev,
      [`${name}Error`]: error,
    }));
  };
  //////////////////////////////////////
  const submitUserData = async () => {
    try {
      await userAdd({
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Phone: formData.phone,
        Email: formData.email,
      });

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
    } catch (error: unknown) {
      console.error("Error occurred while adding user:", error);
      throw new Error("Failed to add user, please try again");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Trigger validation for all fields and update Errors
    const updatedErrors = updatedErrorsFn(formData, t);
    setErrors(updatedErrors);

    // Check if any validation errors exist
    const hasErrors = Object.values(updatedErrors).some(
      (error) => error !== "",
    );

    if (hasErrors) {
      setIsLoading(false);
      return;
    }

    // Create optimistic user
    const optimisticUser: User = createOptimisticUser(formData);

    // Optimistically add to store
    dispatch(addUser(optimisticUser));

    try {
      // Make API call
      await submitUserData();
    } catch (error: unknown) {
      // Revert optimistic update
      console.log(error);
      dispatch(removeUser(optimisticUser.id));

      setServerError(
        error instanceof Error
          ? error.message
          : "Failed to add user, please try again",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="m-w-[546px] lg:w-[546px]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-7 md:flex-row">
            <Input
              htmlFor="firstName"
              label={t("form-inputs.firstName")}
              name="firstName"
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.firstNameError}
            />
            <Input
              htmlFor="lastName"
              label={t("form-inputs.lastName")}
              name="lastName"
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.lastNameError}
            />
          </div>
          <Input
            type="text"
            htmlFor="phone"
            label={t("form-inputs.phone")}
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phoneError}
          />
          <Input
            type="email"
            htmlFor="email"
            label={t("form-inputs.email")}
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.emailError}
          />
          <SubmitBtn loading={isLoading} />
          {serverError && (
            <div className="mt-2 text-red-500">{serverError}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default From;
