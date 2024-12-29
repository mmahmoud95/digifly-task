import { API_URL } from "./constants";
import { User } from "./types";

export const userAdd = async (data: {
  Email: string;
  FirstName: string;
  LastName: string;
  Phone: string;
}) => {
  const response = await fetch(`${API_URL}/user-informations`, {
    method: "Post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const responseData: User = await response.json();
  return {
    data: responseData,
  };
};
