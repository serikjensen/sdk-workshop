import React from "react";
import { Employee } from "@gusto/embedded-react-sdk";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Employee.Profile
      isAdmin
      companyId="demo"
      onEvent={() => {
        navigate("/composition/taxes");
      }}
      defaultValues={{
        employee: {
          firstName: "Sarah",
          lastName: "Smith",
          email: "sarah.smith@example.com",
          dateOfBirth: "1990-01-01",
        },
        homeAddress: {
          street1: "123 Main St",
          city: "Anytown",
          state: "CA",
          zip: "12345",
        },
      }}
    />
  );
};

export default Profile;
