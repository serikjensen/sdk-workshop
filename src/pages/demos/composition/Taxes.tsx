import React from "react";
import { Employee } from "@gusto/embedded-react-sdk";

const Taxes: React.FC = () => {
  return (
    <Employee.Taxes
      employeeId="123"
      onEvent={(evt, data) => {
        console.log("Taxes Event:", evt, data);
      }}
    />
  );
};

export default Taxes;
